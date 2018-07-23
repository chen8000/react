import React from 'react'
import ReactDOM from 'react-dom'
import { counter } from './redux/reducers'

import { createStore } from 'redux'

import App from './components/app'

// 注册状态
const store = createStore(counter)



function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅状态，当状态改变时重绘组件
store.subscribe(render)

/*
    1. 导入reducers里声明的函数
        import { counter } from './redux/reducers'

    2. 从redux导入 createStore 方法
        import { createStore } from 'redux' 

    3. 注册返回新数据的方法 counter 
        const store = createStore(counter)
    
    4. 订阅状态，当状态更新后重绘组件 【这里接收一个回调函数】
         store.subscribe(render)   
*/ 
