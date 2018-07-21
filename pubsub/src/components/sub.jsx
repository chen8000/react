import React, { Component } from 'react';
import Subpub from 'pubsub-js';



class Sub extends Component {

    constructor(props){
        super(props)

        // 订阅事件 来接收兄弟组件发布的数据
        Subpub.subscribe('subpub', (msg, result) => {
            console.log(result)
        })
    }

    render(){
        return (
            <div>
                订阅
            </div>
        )
    }
}

export default Sub;




