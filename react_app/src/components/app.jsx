import React, { Component } from 'react';

import Header from './headfoot/header';
import Footer from './headfoot/footer';
import ContainerLeft from './containerLeft';
import ContainerRight from './containerRight';

export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            list:[
                {
                    name:'哈哈哈',
                    content:'react太难了'
                }
            ]
        }

        this.childUpdateFn = this.childUpdateFn.bind(this);
        this.removeFn = this.removeFn.bind(this);
    }

    // 修改列表数据
    childUpdateFn(val){

        let list = this.state.list;
        list.push(val);

        // 修改数据
        this.setState({ list });
    }

    // 删除数据
    removeFn(index){
        let { list } = this.state;
        
        delete list[index];

        this.setState({ list });
    }


    render(){
        let list = this.state.list;

        return (
            <div>
                <Header />

                <div className="container">
                    <div className="containerLeft">
                        <ContainerLeft updateFn={this.childUpdateFn}/>
                    </div>
                    <div className="containerRight">
                        <ContainerRight removeFn={this.removeFn} result={list}/>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}