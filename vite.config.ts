import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: process.env.VITE_BASE_URL || "/",
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
