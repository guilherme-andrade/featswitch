import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@UI": path.resolve(__dirname, "./src/modules/UI"),
      "@Core": path.resolve(__dirname, "./src/modules/Core"),
      "@I18n": path.resolve(__dirname, "./src/modules/I18n"),
      "@App": path.resolve(__dirname, "./src/modules/App"),
    },
  },
  define: {
    "process.env": process.env,
  },
  server: {
    host: true,
    port: 3000,
  },
});
