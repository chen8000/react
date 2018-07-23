
import { DECREMENT, INCREMENT } from '../redux/action-types'

// 增加
export const increment = number => ({ type:INCREMENT, data: number})

// 减少
export const decrement = number => ({ type:DECREMENT, data: number})

// 异步编程
/*
    1. 同步编程返回一个对象(默认只能返回一个对象)，异步编程需要返回一个函数
    2. 这个函数接收 ‘调用时’ 传入的参数
    3. 返回一个函数，在这个函数里写需要异步执行的代码
    
*/
export const incrementAsync = number => {

    return fnn => {

        setTimeout(() => {
            fnn(increment(number))
        }, 1000)
    }
}

