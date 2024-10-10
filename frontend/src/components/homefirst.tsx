import { faq } from "@/components/faq"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"


export function homefirst() {

  return (
    <div className="relative overflow-hidden" id="smooth-wrapper">
      <section className="h-screen w-full py-12 md:py-24 lg:py-32 px-5">
        <div className="container px-5">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Generate,
              </h1>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
                Innovate,
              </h1>
              <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
                Hack UMB
              </h1>
            </div>
            <div className="text-lg font-medium text-gray-500 dark:text-gray-400 pl-2">
              .092024_V2
            </div>
            <Button asChild>
              <a href="/dashboard">Dashboard</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 h-screen flex items-center w-full px-7">
        <div className="container px-5 text-left">
          <h2 className="text-5xl font-bold mb-6">About</h2>
          <p className="text-2xl">
            Hack UMB is a hackathon organized by the CSC every semester. It
            motivates students to work together for a single day and build a
            meaningful project that would help improve our community. We
            strongly encourage you to exploit your creativity 🔥
          </p>
          <Button asChild className="mt-6">
            <a
              href="https://github.com/UMB-CS-Club/bostonbridge/issues"
              target="_blank"
            >
              View past project submissions
            </a>
          </Button>
        </div>
      </section>

      <div className="relative -mx-4 md:-mx-6 lg:-mx-8 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Carousel className="absolute inset-0 w-full h-full">
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Carousel Image 1"
                className="object-cover w-full h-full vertical-center"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6320.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 2"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6180.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 3"
                className="object-cover object-bottom w-full h-full"
                height={2000}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6208.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 4"
                className="object-cover object-bottom  w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6233.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 5"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6236.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 6"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6238.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 7"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6346.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 8"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_6347.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 9"
                className="object-cover object-center w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_8285.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 10"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/06.png"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 11"
                className="object-cover object-center w-full h-full"
                height={1080}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/HackathonPhotos/IMG_8318.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 12"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/HackathonPhotos/image.png?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-10 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/50 dark:text-black dark:hover:bg-gray-200/75 dark:focus-visible:ring-gray-300" />
          <CarouselNext className="absolute top-1/2 right-10 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/50 dark:text-black dark:hover:bg-gray-200/75 dark:focus-visible:ring-gray-300" />
        </Carousel>
      </div>

      <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black">
        <h2 className="text-5xl font-bold mb-6 pb-8">Our Schedule</h2>
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white z-50	">Coming Soon!</h2>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300">
                    Time
                  </th>
                  <th className="px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300">
                    Event
                  </th>
                  <th className="px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-32" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-32" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-32" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-20" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-40" />
                  </td>
                  <td className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <Skeleton className="h-4 w-32" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="h-screen bg-black">{faq()}</section>

      <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black px-7">
        <div className="container max-w-5xl px-4 py-12 md:py-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Meet our Staff
            </h2>
            <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 md:text-lg">
              Get to know the talented individuals behind our hackathon.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Edward Gaibor"
                  className="grayscale"
                  src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Staff/1695702655227.png"
                />
                <AvatarFallback>EG</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Edward Gaibor</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Computer Science
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Ayden Diel"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1695827912071.png?raw=true"
                />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Ayden Diel</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Computer Science
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Matheus Berbet"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1698897540684.png?raw=true"
                />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Matheus Berbet</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Computer Science
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Minh Nguyen"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1701560473636.png?raw=true"
                />
                <AvatarFallback>MN</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Minh Nguyen</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Computer Science
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Jon O'Neil"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1702147060163.png?raw=true"
                />
                <AvatarFallback>JO</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Jon O'Neil</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CS Alumni
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Alberto Wilhen"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1701796354283.png?raw=true"
                />
                <AvatarFallback>AW</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Alberto Wilhen</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CS Alumni
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Jean Gerard"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/06.png?raw=true"
                />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Jean Gerard</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CS Alumni
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Brendan Nguyen"
                  className="grayscale"
                  src="https://github.com/UMB-CS-Club/hack2.0/blob/main/Staff/1633533752349.png?raw=true"
                />
                <AvatarFallback>BN</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Brendan Nguyen</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CS Alumni
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  alt="Lorenzo Orio"
                  className="grayscale"
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHFdgsy6RREvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705785094449?e=1733961600&v=beta&t=nAbW90e_z6aIcDuRfc0kPkKV7dvErDmb5QAoKNeQ1M4"
                />
                <AvatarFallback>LO</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-sm font-semibold">Lorenzo Orio</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative -mx-4 md:-mx-6 lg:-mx-8 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Carousel className="absolute inset-0 w-full h-full">
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Carousel Image 1"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02381.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 2"
                className="object-contain object-bottom w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02412.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 3"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02433.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 4"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02435.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 5"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02450.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 6"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02477.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 7"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02710.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 8"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02505.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 9"
                className="object-cover w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02573.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 10"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02589.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 11"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02622.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Carousel Image 12"
                className="object-cover object-bottom w-full h-full"
                height={1080}
                src="https://github.com/UMB-CS-Club/hack2.0/blob/main/First_Hackathon/DSC02667.jpg?raw=true"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                }}
                width={1920}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-10 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/50 dark:text-black dark:hover:bg-gray-200/75 dark:focus-visible:ring-gray-300" />
          <CarouselNext className="absolute top-1/2 right-10 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/50 dark:text-black dark:hover:bg-gray-200/75 dark:focus-visible:ring-gray-300" />
        </Carousel>
      </div>

      <section className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-black px-7">
        <div className="container grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-16 max-w-6xl px-4 py-16 mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Vision
            </h2>
            <p className="max-w-[500px] text-gray-500 dark:text-gray-400">
              At our second Hackathon in 2024, our vision is to foster a dynamic
              and inclusive environment where the brightest minds from UMass
              Boston and beyond come together to innovate, collaborate, and
              create solutions for student-centered issues.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mission
            </h2>
            <p className="max-w-[500px] text-gray-500 dark:text-gray-400">
              Our mission is to inspire and empower students from diverse
              backgrounds to leverage their computer science skills in
              addressing the unique challenges associated with commuter student
              life. Our goal is to create a platform where innovative ideas can
              flourish, fostering a sense of community, collaboration, and
              technological advancement.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-screen bg-black dark:bg-black px-7">
        <div className="container max-w-6xl px-4 py-16 mx-auto">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl dark:text-gray-100">
              Our Sponsors
            </h2>
            <p className="max-w-xl text-lg text-gray-400 dark:text-gray-400">
              We're proud to be supported by these amazing companies during our
              last hackathon. Stay tuned for our new sponsors! Want to become a
              sponsor? Contact us{" "}
              <a
                href="mailto:edward.gaibor001@umb.edu"
                className="text-blue-400 hover:underline"
              >
                here!
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center justify-center">
              <a href="https://www.qrpigeon.pics" target="_blank">
                <img
                  alt="Sponsor 1"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  height={120}
                  src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Sponsors/Título%20(3).png"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Sponsor 2"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                height={120}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Sponsors/image_1.png"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={120}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Sponsor 3"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                height={120}
                src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Sponsors/image_2.png"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
                width={120}
              />
            </div>
            <div className="flex items-center justify-center">
              <a href="https://www.umb.edu" target="_blank">
                <img
                  alt="Sponsor 4"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  height={120}
                  src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Sponsors/umass%20boston.png"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                  }}
                  width={120}
                />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://www.bvs.net" target="_blank">
                <img
                  alt="Sponsor 5"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  height={120}
                  src="https://raw.githubusercontent.com/UMB-CS-Club/hack2.0/main/Sponsors/bbs.png"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                  }}
                  width={120}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen bg-black px-4 md:px-6">
        <div className="max-w-2xl text-center space-y-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl pb-5">
            Join Our Discord Server
          </h1>
          <p className="text-lg text-white/90 md:text-xl pb-10">
            Connect with other participants, find team members, learn and gather
            resources, and much more!
          </p>
          <Button
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#5865F2] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5865F2]"
            asChild
          >
            <a href="https://discord.gg/yNhZDfR5yk" target="_blank">
              Join Discord
            </a>
          </Button>
        </div>
      </section>

      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 HackUMB Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
              href="https://github.com/gaiborjosue/HackUMB-Website"
              target="_blank"
            >
              <GithubIcon className="h-5 w-5" />
              View Source
            </a>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Designed and developed by{" "}
              <a
                className="font-medium text-gray-900 hover:underline dark:text-gray-50"
                href="https://edwardgaibor.me"
                target="_blank"
              >
                Edward Gaibor
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
