import app from "./app"

Bun.serve({
  // hostname: "0.0.0.0",
  port: 6969,
  fetch: app.fetch
});

console.log("Server running");
