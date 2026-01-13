import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 如果报错 'path' 找不到，请运行 npm install @types/node -D

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置 @ 指向 src 目录
    }
  },
  // 顺便配一下 scss 全局变量导入（为以后做准备，现在可以先留空）
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/assets/styles/variables.scss" as *;` 
      }
    }
  }
})