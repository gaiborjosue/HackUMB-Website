import { createFileRoute } from '@tanstack/react-router';
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
  Text
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useQuery } from "@tanstack/react-query";
import { useQueryOptions } from '@/lib/api';
import { Link } from '@tanstack/react-router';
import BadgeTemplate from '@/components/BadgeTemplate';
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_authenticated/badge')({
  component: Badge,
});

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload(
  "https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/tag.glb"
);
useTexture.preload(
  "https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/band.png"
);

export default function Badge(): JSX.Element {
  const { data } = useQuery(useQueryOptions);
  const lastName = data?.user?.family_name || "Guest";
  const firstName = data?.user?.given_name || "Guest";

  const userId = data?.user?.id || "0";
  const templateSrc = "https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/HACKUMB_BADGE.png";

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white pt-16">
        <Link to="/dashboard">
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">See you soon!</h1>
          <p className="text-xl">Join our Discord server for more details</p>
        </div>
        <div className="relative" style={{ width: '100%', height: '800px' }}>
          <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
            <ambientLight intensity={Math.PI} />
            <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
              <Band firstName={firstName} lastName={lastName} />
            </Physics>
            <Environment background blur={0.75}>
              <color attach="background" args={["black"]} />
              <Lightformer
                intensity={2}
                color="white"
                position={[0, -1, 5]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[-1, -1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[1, 1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={10}
                color="white"
                position={[-10, 0, 14]}
                rotation={[0, Math.PI / 2, Math.PI / 3]}
                scale={[100, 10, 1]}
              />
            </Environment>

          </Canvas>
          <BadgeTemplate userId={userId} userName={firstName + " " + lastName} templateSrc={templateSrc} />
        </div>
      </div>
    </>
  );
}

interface BandProps {
  firstName: string;
  lastName: string;
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ firstName, lastName, maxSpeed = 50, minSpeed = 10 }: BandProps): JSX.Element {
  const band = useRef<THREE.Mesh>(),
    fixed = useRef<RigidBody>(),
    j1 = useRef<RigidBody>(),
    j2 = useRef<RigidBody>(),
    j3 = useRef<RigidBody>(),
    card = useRef<RigidBody>();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };
  const { nodes, materials } = useGLTF(
    "https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/tag.glb"
  );
  const texture = useTexture(
    "https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/band.png"
  );
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState<THREE.CatmullRomCurve3>(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(
            1,
            ref.current.lerped.distanceTo(ref.current.translation())
          )
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => (
              e.target.setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.3}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            <Text
              position={[-0.17, 0.40, 0.01]}
              fontSize={0.07}
              color="white"
            >
              {firstName}
            </Text>
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            <Text
              position={[-0.18, 0.33, 0.01]}
              fontSize={0.07}
              color="white"
            >
              {lastName}
            </Text>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
