import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import { prettierFormat } from "vite-plugin-prettier-format"
import autoImport from "unplugin-auto-import/vite"

import path from "node:path"


export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    dts({
      processor: "vue",
      tsconfigPath: "./tsconfig.app.json"
    }),
    autoImport({
      imports: ["vue", "@vueuse/core", "@vueuse/math", "pinia"]
    }),
    prettierFormat()
  ],
  build: {
    minify: "terser",
    lib: {
      entry: './src/main.ts',
      formats: ['es', 'cjs'],
      fileName: 'main',
    },
    terserOptions: {
      mangle: false,
      compress: {
        booleans_as_integers: false,
        booleans: false
      }
    },
    rolldownOptions: {
      external: ["vue", "@vueuse/core", "@vueuse/math", "pinia"]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
