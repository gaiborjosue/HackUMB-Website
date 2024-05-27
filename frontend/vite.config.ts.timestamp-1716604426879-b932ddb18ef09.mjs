// vite.config.ts
import { defineConfig } from "file:///mnt/c/Users/gaibo/OneDrive/Escritorio/Python%20Projects/HackathonWeb/app/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/gaibo/OneDrive/Escritorio/Python%20Projects/HackathonWeb/app/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { TanStackRouterVite } from "file:///mnt/c/Users/gaibo/OneDrive/Escritorio/Python%20Projects/HackathonWeb/app/frontend/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dir, "./src"),
      "@server": path.resolve(import.meta.dir, "../server")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvZ2FpYm8vT25lRHJpdmUvRXNjcml0b3Jpby9QeXRob24gUHJvamVjdHMvSGFja2F0aG9uV2ViL2FwcC9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2dhaWJvL09uZURyaXZlL0VzY3JpdG9yaW8vUHl0aG9uIFByb2plY3RzL0hhY2thdGhvbldlYi9hcHAvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2dhaWJvL09uZURyaXZlL0VzY3JpdG9yaW8vUHl0aG9uJTIwUHJvamVjdHMvSGFja2F0aG9uV2ViL2FwcC9mcm9udGVuZC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpbidcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIFRhblN0YWNrUm91dGVyVml0ZSgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpciwgXCIuL3NyY1wiKSxcbiAgICAgIFwiQHNlcnZlclwiOiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlyLCBcIi4uL3NlcnZlclwiKVxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICBcIi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH1cbiAgICB9LFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvYSxTQUFTLG9CQUFvQjtBQUNqYyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsMEJBQTBCO0FBSW5DLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7QUFBQSxFQUN2QyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTztBQUFBLE1BQzFDLFdBQVcsS0FBSyxRQUFRLFlBQVksS0FBSyxXQUFXO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
