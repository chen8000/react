

import { INCREMENT, DECREMENT } from './action-types'


/*
     1. 在这里定义一个函数， 接受两个参数 
        一个初始值 state 
        一个action action包含两个属性 一个type 一个 data 
        type 状态
        data 数据

        最终这个函数return出来一个新数据，也就是要渲染的数据

*/ 


export function counter(state = 0, action) {
    
    switch(action.type){
        case INCREMENT : 
            return state + action.data
        case DECREMENT :
            return state - action.data
        default :
            return state    
    }
}
