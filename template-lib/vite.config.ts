import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { prettierFormat } from "vite-plugin-prettier-format"

import path from "node:path"


export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.lib.json"
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
