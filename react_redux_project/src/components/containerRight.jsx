

import React, { Component } from 'react';

export default class ContainerRight extends Component {

    removeFn = (event) => {
        let index = event.target.parentNode.getAttribute('index');

        // 注意数据类型啊
        this.props.removeFn(Number(index));
    }
    
    render(){
        return(
            <div className="containerRightBox">
                <h2>评论回复：</h2>
                
                { this.props.result.map( (res, index) => { 
                    return (
                        <div key={index} index={index} className="reply">
                            <h3 className="title">{res.name}：</h3>
                            <p>{res.content}</p>
                            <button onClick={this.removeFn}>删除</button>
                        </div>
                    )
                 } ) }
            </div>
        )
    }
}