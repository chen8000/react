


import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props)


        this.state = {
            name:'',
            password:''
        }


        // 绑定自定义函数的htis指向组件
        this.Submit = this.Submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    Submit(event){

        // 阻止默认行为 （提交）
        event.preventDefault();

        // 获取用户名和密码
        let name = this.name.value;
        let password = this.password.value;


        this.setState({ name, password });

    }


    handleChange(event){
        let password = event.target.value;

        this.setState({ password })
    }   
    

    render(){
        return (
            <form action="" onSubmit={this.Submit}>
                <h1>Form 表单</h1>
                <label htmlFor="name">姓名：</label>
                <input ref={input => this.name = input} id="name" type="text" />
                <br/>
                <label htmlFor="psd">密码：</label>
                <input 
                    ref={input => this.password = input} 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    id="psd" type="password" />
                <br/>
                <input type="submit" />

                <div>
                    你输入的姓名：{this.state.name}
                    <br/>
                    你输入的密码：{this.state.password}
                </div>
            </form>
        )
    }
}


export default Form;








