import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  root: "src",

  base: command === "build"
    ? "/ProyectoVite/"
    : "/",

  publicDir: "../public",

  plugins: [],

  server: {
    port: 1234
  },

  build: {
    outDir: "../dist"
  }
}));