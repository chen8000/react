

// 返回函数
import { UPDATE, DELETE } from './action-types'

// 修改列表数据
export const childUpdateFn = val => ({type:UPDATE, data:val})

// 删除列表数据
export const removeFn = index => ({type:DELETE, data:index})







