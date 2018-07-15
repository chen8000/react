

import React, { Component } from 'react';
import PropsType from 'prop-types';


class Add extends Component {

    constructor(props){
        super(props)

        this.add = this.add.bind(this);
    }

    add(){
        const val = this.addVal.value.trim();
        if(!val){
            return
        }
        this.props.addFn(val);

        this.addVal.value = '';
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input ref={ input => this.addVal = input } type="text"/>
                <button onClick={this.add}>add##{this.props.todoLen}</button>
            </div>
        )
    }
}

Add.propsType = {
    addFn:PropsType.func.isRequired
}

export default Add;





