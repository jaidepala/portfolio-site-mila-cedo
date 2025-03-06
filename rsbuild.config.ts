import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Mila Cedo | 2025",
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
