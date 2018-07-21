
import React, { Component } from 'react';


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

    // 将要更新数据
    componentWillUpdate(){
       this.setState({ loading:true });
    }

    render(){


        let { initView, loading, users, errorMsg } = this.state;

        if(initView){
            return (

                <h2>请输入关键字搜索:{this.props.useName}</h2>
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
                                    <a href={user.url}>
                                        <img src={user.avatarUrl} alt=""/>
                                        <h6>{user.name}</h6>
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








