import path from "path"
import dotenv from 'dotenv';
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr";

dotenv.config()
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'process.env': process.env
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://wordsearchalgo-001-site1.atempurl.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '/api'),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
