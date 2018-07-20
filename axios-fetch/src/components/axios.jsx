


import React, { Component } from 'react';
import axios from 'axios';




class Axios extends Component {

    componentDidMount(){

        // 使用axios发送get请求
        axios.get('https://api.github.com/search/repositories?q=react&sort=starts').then( (res) => {
            console.log('axios');
            console.log(res);
        });

        // 使用fetch发送异步请求
        fetch('https://api.github.com/search/repositories?q=react&sort=starts').then( (res) => {
            console.log('fetch');
            return res.json()
        }).then( (res) => {
            console.log(res)
        })
    }

    render(){
        return (
            <div>divvvv</div>
        )
    }
}


export default Axios;









