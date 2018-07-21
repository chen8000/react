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

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.msg.map(
                            (m,index) => 
                            <li key={index}>
                                <NavLink to={`/home/massage/massagedetail/${m.id}`}>{m.title}</NavLink>
                            </li>
                        )
                    }
                </ul>

                <div>
                    <Route path="/home/massage/massagedetail/:id" component={Massagedetail}/>
                </div>
            </div>
        )
    }
}


export default Massage;






