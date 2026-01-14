// 引入你写的那个 service 实例
import request from '@/util/request'

/**
 * 获取产品全部分类
 */
export const getCategories = () => {
  return request({
    url: '/categories',
    method: 'get'
  })
}

/**
 * 分页获取产品列表
 * @param params { categoryId, keyword, pageNum, pageSize }
 */
export const getProducts = (params: any) => {
  return request({
    url: '/products',
    method: 'get',
    params // Axios 会自动把对象转为 ?categoryId=1&keyword=xxx
  })
}

/**
 * 获取产品详情
 */
export const getProductDetail = (id: string | number) => {
  return request({
    url: `/products/${id}`,
    method: 'get'
  })
}