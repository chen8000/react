
import React, {Component} from 'react'
import { Button, Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {

    handleClick = () => {
        Toast.info('哈哈')
    }

    render(){
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>button</Button>
            </div>
        )
    }
}

export default App;