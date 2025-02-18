import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       require('tailwindcss')({
  //         content: [
  //           './index.html',                      // Your main HTML file
  //           './src/**/*.{vue,js,ts,jsx,tsx}',    // Vue and related files
  //           './node_modules/flowbite/**/*.js',   // Flowbite's JavaScript files
  //         ],
  //       }),
  //       require('autoprefixer'),
  //     ],
  //   },
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
