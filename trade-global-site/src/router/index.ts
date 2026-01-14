import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout, // 这一层提供导航和脚部
      children: [
        {
          path: '', // 默认显示首页
          name: 'Home',
          component: () => import('@/views/home/homeView.vue')
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/views/products/ProductList.vue')
        },
        {
          path: 'products/:id', 
          name: 'ProductDetail',
          component: () => import('@/views/products/ProductDetail.vue')
        }
      ]
    }
  ]
})

export default router