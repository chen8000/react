
import React, { Component } from 'react';

import Search from './search';
import Todo from './todo';

import './index.css';

class App extends Component {

    state = {
        name:''
    }

    setStateName = (name) => {
        this.setState({ name })
    }

    render(){

        return (
            <div className="searchBox">
                <div className="header">
                    <div className="container">
                        <Search setStateName={this.setStateName}/>
                    </div>
                </div>
                
                <div className="container">
                    <div className="todoBox">
                        
                        <Todo useName={this.state.name}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;





