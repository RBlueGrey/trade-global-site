import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// 临时定义一个 Home 组件，稍后我们去 views 里写真正的
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // 路由懒加载：访问时才加载文件，优化首屏速度
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式 (无 # 号)
  routes
})

export default router