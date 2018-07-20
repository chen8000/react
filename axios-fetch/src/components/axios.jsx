


import React, { Component } from 'react';
import axios from 'axios';




class Axios extends Component {

    componentDidMount(){

        // 使用axios发送get请求
        axios
        .get('https://api.github.com/search/repositories?q=react&sort=starts')
        .then( (res) => {
            console.log('axios');
            console.log(res);
        })
        // 返回错误信息
        .catch( (err) => {
            console.log(err)
        })


        // 使用fetch发送异步请求
        fetch('https://api.github.com/search/repositories?q=react&sort=starts')
        .then( (res) => {
            console.log('fetch');
            return res.json()
        })
        .then( (res) => {
            console.log(res);
        })
        .catch( (err) => {
            console.log(err);
        })
    }

    render(){
        return (
            <div>divvvv</div>
        )
    }
}


export default Axios;









