

// 返回函数
import { UPDATE, DELETE, GETRES } from './action-types'

// 修改列表数据
export const childUpdateFn = val => ({type:UPDATE, data:val})

// 删除列表数据
export const removeFn = index => ({type:DELETE, data:index})

// 接收异步获取的数据
const getComment = res => ({type:GETRES, data:res})

// 异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        
        // 分发一个同步的action
        setTimeout(() => {
            const getRes = [
                {name:'1111', content:'2222'}
            ]
            dispatch(getComment(getRes))
        },1000)

    }
}





