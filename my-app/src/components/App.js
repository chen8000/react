import React, { Component } from 'react';

// 添加子组件
import Todo from './Todo';
import Form from './form';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      btnText : '点击',
      input1Value : ''
    }

    // 把自定义函数的this绑定成组件的this
    this.btnFn = this.btnFn.bind(this);
    this.blurFn = this.blurFn.bind(this);
  }

  // 点击获取input的值
  btnFn(){
    // const input1Val = this.refs.input1.value;
    // console.log(input1Val)

    // 建议的写法
    console.log(this.input1.value)
  }

  // 失去焦点获取值
  blurFn(event){
    // 可以这样获取
    console.log(event.target.value);

    // 也可以这样
    console.log(this.input2.value)

  }

  render() {
    return (
      <div>
        <h1>hellow React</h1>
        <input type="text" ref="input1"/>{/* 官方不建议这么写 */}
        <input type="text" ref={ input => this.input1 = input } />{/* 建议写法 */}
        <button onClick={this.btnFn}>{this.state.btnText}</button>
        <input onBlur={this.blurFn} type="text" ref={ input => this.input2 = input } />

        <Todo />

        <hr/>
        <Form />
      </div>
    );
  }
}

export default App;
