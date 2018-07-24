
import React, { Component } from 'react';

export default class Container extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:'',
            content:''
        }

        this.submitFn = this.submitFn.bind(this);
        this.nameFn = this.nameFn.bind(this);
        this.contentFn = this.contentFn.bind(this);
    }

    // 提交
    submitFn(event){
        let name = this.state.name.trim();
        let content = this.state.content.trim();

        if(name && content) {
            // 调用父类函数
            this.props.updateFn(this.state);
        }else{
            console.log('请填写姓名和描述');
        }

        // 清空value
        this.setState({ name:'', content:'' })

        // 阻止默认提交
        event.preventDefault();
    }

    // name输入框
    nameFn(event){
        let name = event.target.value;
        this.setState({ name });
    }

    // 描述输入框
    contentFn(event){
        let content = event.target.value;
        this.setState({ content });
    }


    render(){

        return (
            <div className="containerLeftBox">
                <form onSubmit={this.submitFn}>
                    <div className="form-group">
                        <label htmlFor="name">姓名：</label>
                        {/* 受控组件写法 */}
                        <input onChange={this.nameFn} value={this.state.name} type="text" id="name" name="name" placeholder="请输入你的姓名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">评论内容:</label>
                        <textarea onChange={this.contentFn} value={this.state.content} name="content" id="content" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"/>
                    </div>
                </form>
                
            </div>
        )
    }
}