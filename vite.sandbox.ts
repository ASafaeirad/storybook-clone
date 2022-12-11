import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { join } from 'node:path'

export default defineConfig({
  root: join(process.cwd(), "/.sandbox"),
  plugins: [react({ exclude: /\.stories\.tsx?$/ }), svgr()],
});
