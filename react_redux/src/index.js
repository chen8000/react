import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'

import App from './components/app'



function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅状态，当状态改变时重绘组件
store.subscribe(render)

/*

    1. 注册返回新数据的方法 counter 
        const store = createStore(counter)
    
    4. 订阅状态，当状态更新后重绘组件 【这里接收一个回调函数】
         store.subscribe(render)   
*/ 
