import { defineConfig } from "vite";
import React from "react";

export default defineConfig({
  base: "/fasika-hair-style/",
  plugins: [React],
  build: {
    outDir: "build",
  },
});
