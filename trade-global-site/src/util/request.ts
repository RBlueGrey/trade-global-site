import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: '/api', // 对应 SpringBoot 后端地址
  timeout: 15000 // 跨国访问建议设长一点
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 从浏览器获取语言设置，传给后端做 i18n
  const lang = localStorage.getItem('lang') || 'en'
  config.headers['Accept-Language'] = lang
  return config
})

// 响应拦截器：安全处理
service.interceptors.response.use(
  response => {
    const res = response.data
    // 统一处理后端返回的状态码
    if (res.code !== 200) {
      ElMessage.error(res.msg || '系统错误')
      return Promise.reject(new Error(res.msg))
    }
    return res.data
  },
  error => {
    // 处理常见的 403, 404, 500 安全防护或故障
    ElMessage.error('网络请求超时或服务器无响应')
    return Promise.reject(error)
  }
)

export default service