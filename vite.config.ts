import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/variables" as var; @use "./src/styles/mixins" as mix;`,
      },
    },
  },
  plugins: [react()],
  base: "/todo-list__react/",
});
