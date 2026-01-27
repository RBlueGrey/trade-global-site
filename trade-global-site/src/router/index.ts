import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/homeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/ai-function',
  //   name: 'aiFunction',
  //   component: () => import('@/views/aiFunction/AiFunctionView.vue')
  // },
  // {
  //   path: '/pricing',
  //   name: 'pricing',
  //   component: () => import('../views/pricing/PricingView.vue')
  // },
  // {
  //   path: '/product',
  //   name: 'product',
  //   component: () => import('../views/product/ProductView.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/about/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router