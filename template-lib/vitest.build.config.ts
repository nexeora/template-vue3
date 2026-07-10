import { defineConfig } from 'vitest/config'
import dts from 'unplugin-dts/vite'
import { prettierFormat } from "vite-plugin-prettier-format"

import path from "node:path"


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './dist'),
    },
  },
})
