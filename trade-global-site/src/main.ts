import { createApp } from 'vue'
import App from './App.vue'

// 1. 引入样式
import '@/styles/main.scss'
// 引入 Element Plus 样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css' 

// 2. 引入插件
import ElementPlus from 'element-plus'
import router from '@/router'
import pinia from '@/stores'

const app = createApp(App)

// 3. 挂载插件
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')