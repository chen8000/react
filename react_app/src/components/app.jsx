import React, { Component } from 'react';
import logo from '../logo.svg';

import '../index.css';

export default class App extends Component {
    render(){
        return (
            <div>
                <img className="img" src={logo} alt=""/>
                <p>react app组件</p>
            </div>
        )
    }
}