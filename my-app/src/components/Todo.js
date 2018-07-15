


import React, { Component } from 'react';

// 引入子组件
import Add from './Add';



class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {
            title:'输入内容添加到列表',
            todo:['111']
        }

        // 绑定自定义函数的this为组件的this
        this.addFn = this.addFn.bind(this);
    }

    addFn(val){
        const todo = this.state.todo;
        todo.unshift(val);
        this.setState({todo});
    }



    render(){
        let todo = this.state.todo;
        return (
            <div>
                
                <Add title={todo.title} todoLen={todo.length}  addFn={this.addFn}/>
                <ul>
                    {todo.map( (val, index) =>  <li key={index}>{val}</li> )}
                </ul>
            </div>
        )
    }
}

export default Todo;













