
import React, { Component } from 'react';
import axios from 'axios';


class Todo extends Component{

    state = {

        // 还没有搜索
        initView: true,

        // 正在搜索
        loading:false,

        // 获取到数据
        users:null,

        // 获取数据失败
        errorMsg:null
    }

    // 组件将要更新数据
    componentWillReceiveProps(nextProps){

        let { useName } = nextProps;
        if(useName){
            this.setState({ initView: false, loading:true });

            // 发送请求
            let url = `https://api.github.com/search/users?q=${useName}`;
            axios.get(url)
            .then( response => {
                let users = response.data.items
                this.setState({ users, loading:false })
                console.log(users)
            })
            .catch(err => {
                // 请求错误
                this.setState({ errorMsg:true, loading:false });
            })

        }
    //    this.setState({ loading:true });
    }

    render(){


        let { initView, loading, users, errorMsg } = this.state;

        if(initView){
            return (

                <h2>请输入关键字搜索{this.props.useName}</h2>
            )
        }else if(loading){
            return (
                <h2>loading...</h2>
            )
        }else if(errorMsg){
            return (
                <h2>请求失败!!!</h2>
            )
        }else{
            return (
            
                <div className="todo">
                    <ul>
                        {
                            users.map( (user, index) => (
                                <li key={index}>
                                    <a href={user.html_url}>
                                        <img src={user.avatar_url} alt=""/>
                                        <h6>{user.login}</h6>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        
    }
}

export default Todo;








