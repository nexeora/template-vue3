import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import autoImport from "unplugin-auto-import/vite"

import path from "node:path"


export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    autoImport({
      imports: ["vue", "@vueuse/core", "@vueuse/math", "pinia"]
    })
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 2
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
