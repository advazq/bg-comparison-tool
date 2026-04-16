import path from "node:path";
import { defineConfig } from "vite";

const prod = process.env.NODE_ENV === "production";

export default defineConfig({
  root: "src" /* index.html fuera de src/ */,
  base: prod ? `/${path.basename(process.cwd())}/` : "/",
  mode: prod ? "production" : "development",
  publicDir: "../public",
  plugins: [],
  css: {
    transformer: "lightningcss",
  },
  server: { port: 5173 },
  build: {
    outDir: "../dist",
  },
});
