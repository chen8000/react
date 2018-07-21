import React, {Component} from 'react'



class Massagedetail extends Component{

    state = {
        msg:[
            {id:1, title:'msg1', content:'msg111111'},
            {id:2, title:'msg2', content:'msg222222'},
            {id:3, title:'msg3', content:'msg333333'}
        ]
    }

    render(){
        // console.log(this.props.match)
        let { id } = this.props.match.params

        let msg = this.state.msg.find((m) => m.id === Number(id))
        
        return (
            <div>
                <ul>
                    <li>{msg.id}</li>
                    <li>{msg.title}</li>
                    <li>{msg.content}</li>
                </ul>
            </div>
        )
    }
}

export default Massagedetail