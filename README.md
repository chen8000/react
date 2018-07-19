# 笔记
## 生命周期流程
## 1> 第一次初始化渲染数据 render()
* constructor() 初始化组件对象调用
* componentWillMount() 将要插入数据的回调函数
* render() 渲染虚拟dom
* componentDidMount() 渲染dom完成回调
## 2> 每次更新数据 this.setState({})
* componentWillUpdate() 将要更新数据的回调函数
* render() 更新数据（重新渲染）
* componentDidUpdate() 更新完回调
## 3> 移除组件 ReactDOM.unmountComponentAtNode()接收节点id
* componentWillUnmount() 组件将要被移除回调
## 重要的钩子
* render() 初始化渲染或更新数据时调用
* componentDidMount() 开启监听，发送ajax请求
* componentWillUnmount() 做一些清理工作，如清理定时器
* componentWillReceiveProps()
