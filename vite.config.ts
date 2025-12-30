import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: "./",
  },
  esbuild: {
    jsxFactory: "createElement",
    jsxFragment: "Fragment",
    jsxInject:
      "import { createElement, Fragment } from '@/utils/createElement';",
  },
});
