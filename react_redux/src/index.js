import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'

import store from './redux/store'

import App from './containers/app'


// 使用react-redux组件 Provider 组件包装react组件  把redux的 store 传给 Provider 组件
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))




