
import React, { Component } from 'react'
import * as actions from '../redux/actions'


class App extends Component {
    

    increment = () => {
        // 获取select的value 传给redux 告诉redux需要 +
        let selectVal = Number(this.select.value)
        
        // 这里调用 dispatch({}) 方法，传入一个对象，最终接收参数的是处理数据的 reducers.js 里的方法
        this.props.store.dispatch(actions.increment(selectVal))

    }

    decrement = () => {
        // 获取select的value 传给redux 告诉redux需要 - 
        let selectVal = Number(this.select.value)
        
        this.props.store.dispatch(actions.decrement(selectVal))
    }

    incrementIfOdd = () => {
        let count = Number(this.props.store.getState())
        let selectVal = Number(this.select.value)
        // let newCount = count - selectVal
        if(count%2 === 1){
            this.props.store.dispatch(actions.increment(selectVal))
        }
    }

    incrementAsync = () => {
        
        let selectVal = Number(this.select.value)
        

        setTimeout(() => {
            this.props.store.dispatch(actions.decrement(selectVal))
        }, 1000)

    }
    

    render(){
        return (
            <div>
                <p>click {this.props.store.getState()} times</p>
                <div>
                    <select ref={ select => this.select = select }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}

export default App;


