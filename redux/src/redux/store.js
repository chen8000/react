
/*
    1. 从redux导入 createStore 方法
        import { createStore } from 'redux' 

    2. 导入reducers里声明的函数
        import { counter } from './redux/reducers'
        
    3. 注册返回新数据的方法 counter 
        const store = createStore(counter)

    4. 导出store对象
*/ 


import { createStore } from 'redux'
import { counter } from './reducers'

// 注册状态
const store = createStore(counter)

export default store;