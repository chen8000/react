import React, { Component } from 'react';

export default class Container extends Component {

    constructor(props){
        super(props)

        this.submitFn = this.submitFn.bind(this);
    }

    submitFn(event){

        // 阻止默认提交
        event.preventDefault();
    }

    render(){
        return (
            <div className="containerLeftBox">
                <form onSubmit={this.submitFn}>
                    <div className="form-group">
                        <label htmlFor="name">姓名：</label>
                        <input type="text" id="name" name="name" placeholder="请输入你的姓名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">评论内容:</label>
                        <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"/>
                    </div>
                </form>
                
            </div>
        )
    }
}