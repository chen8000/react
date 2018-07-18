

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MountFn extends Component {

    constructor(props){
        super(props)

        this.state = {
            opacity:1
        }

        this.unMountFn = this.unMountFn.bind(this);
    }

    // 组件挂载完后执行
    componentDidMount(){
        let { opacity } = this.state;
        this.IntervalId = setInterval(() => {
            opacity -= 0.1;
            if(opacity <= 0){
                opacity = 1;
            }
            this.setState({ opacity });
        },100);
    }
    // 组件将要被移除执行
    componentWillUnmount(){
        clearInterval(this.IntervalId);
    }


    unMountFn(){

        // 移除组件需要传入dom节点     会移除这个节点下的所有组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }


    render(){
        let { opacity } = this.state;
        return (
            <div id="div">
                <h2 style={ { opacity } }>{this.props.msg}</h2>
                <button onClick={this.unMountFn}>卸载组件</button>
            </div>
        )
    }

}


export default MountFn;


