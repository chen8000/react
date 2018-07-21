
import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';

import Home from './home';
import About from './about';



class App extends Component {

    render(){
        return (
            <div className="container">
                <div className="left">
                    <NavLink to="/home">home</NavLink><br/>
                    <NavLink to="/about">about</NavLink>
                </div>
                <div className="right">

                    {/* 匹配路由 根据path指定加载不同模块 */}
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />

                        {/* 路由重定向，默认定向到home */}
                        <Redirect path="/home"/>
                    </Switch>
                </div>
            </div>
        )
    }
}


export default App;






