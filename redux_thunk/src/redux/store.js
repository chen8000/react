
/*
    1. 应用中间件实现异步编程  redux-thunk
    
    2. 从redux里导入 applyMiddleware 函数，

    3. 引入redux-thunk

    4. 应用异步中间件
        给createStore()函数传第二个参数，applyMiddleware(thunk) 
*/ 


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { counter } from './reducers'

// 注册状态
const store = createStore(counter,applyMiddleware(thunk))

export default store;