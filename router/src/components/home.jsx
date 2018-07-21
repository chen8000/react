

import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import News from './news';
import Massage from './massage';

class Home extends Component {

    render(){
        return (
            <div>
                 <hr/>
                    <div>
                        <NavLink to="/home/news">news</NavLink>
                        <NavLink to="/home/massage">massage</NavLink>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/massage" component={Massage}/>
                            <Redirect to="/home/news"/>
                        </Switch>
                    </div>
            </div>
        )
    }
}   


export default Home;


