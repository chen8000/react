import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'

import Massagedetail from './massagedetail'



class Massage extends Component {

    state = {
        msg:[
            {id:1, title:'msg1'},
            {id:2, title:'msg2'},
            {id:3, title:'msg3'}
        ]
    }

    // history.push 跳转
    pushRoute = (id) => {
        this.props.history.push(`/home/massage/massagedetail/${id}`)
    }

    // history.replace 跳转
    replaceRoute = (id) => {
        this.props.history.replace(`/home/massage/massagedetail/${id}`)
    }

    // history.goback 
    back = () => {
        this.props.history.goBack()
    }

    // history.goForward
    forward = () => {
        this.props.history.goForward()
    }


    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.msg.map(
                            (m,index) => 
                            <li key={index}>
                                <NavLink to={`/home/massage/massagedetail/${m.id}`}>{m.title}</NavLink>

                                {/* 使用按钮点击的方式跳转 -- history.push */}
                                <button onClick={() => this.pushRoute(m.id)}>history跳转</button>

                                {/* 使用按钮点击的方式跳转 -- history.replace */}
                                <button onClick={() => this.replaceRoute(m.id)}>replace跳转</button>
                            </li>
                        )
                    }
                </ul>

                <button onClick={this.back}>前进</button>
                <button onClick={this.forward}>回退</button>

                <div>
                    <Route path="/home/massage/massagedetail/:id" component={Massagedetail}/>
                </div>
            </div>
        )
    }
}


export default Massage;






