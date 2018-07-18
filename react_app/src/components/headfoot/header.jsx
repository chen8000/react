import React, { Component } from 'react';
import logo from '../../logo.svg';
import './headfoot.css';

class Header extends Component {
    render(){
        return (
            <header className="headerBox">
                <img className="logo" src={logo} alt=""/>
                <h1>请发表你的看法</h1>
            </header>
        )
    }
}

export default Header;