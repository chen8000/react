import React, { Component } from 'react';

export default class ContainerRight extends Component {
    
    render(){
        return(
            <div className="containerRightBox">
                <h2>评论回复：</h2>
                <div className="reply">
                    <h3 className="title">xxx说：</h3>
                    <p>xxxxxx</p>
                    <button>删除</button>
                </div>
            </div>
        )
    }
}