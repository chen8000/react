
/*
    1. 应用中间件实现异步编程  redux-thunk
    
    2. 从redux里导入 applyMiddleware 函数，

    3. 引入redux-thunk

    4. 应用异步中间件
        给createStore()函数传第二个参数，applyMiddleware(thunk) 
*/ 


/*
    使用redux调试工具 redux-devtools 
    1. 在chrome商店 搜索拓展程序 redux devtools 
    2. 在需要使用调试工具的项目安装 redux-devtools-extension
    3. import { composeWithDevTools } from 'redux-devtools-extension'
    4. 把 applyMiddleware(thunk) 传入  composeWithDevTools() 函数
*/ 


import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { counter } from './reducers'

// 注册状态
const store = createStore(counter,composeWithDevTools(applyMiddleware(thunk)))

export default store;