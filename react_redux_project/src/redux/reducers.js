
/*
    根据老的state和action返回一个新的state
*/ 

import { combineReducers } from 'redux'

import { DELETE, UPDATE, GETRES } from './action-types'

// state 初始状态
const initlist = []

function counter(state = initlist, action) {

    switch(action.type){

        // 修改数组
        case UPDATE :
            
            return [action.data, ...state]

        // 删除
        case DELETE :   

            // 注意数据类型啊
            return state.filter( (list, index) => index !== action.data )
        case GETRES :
            return action.data

        default :
            return state
    }

}


export default combineReducers({counter})






