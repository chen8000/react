

import React, {Component} from 'react';
import Pubsub from 'pubsub-js';

class Pub extends Component {

    constructor(props){
        super(props)

        setTimeout(() => {

            // 发布数据，
            Pubsub.publish('subpub', 'hellow pubsub')
        },2000)
    }


    render(){
        return (
            <div>
                发布
            </div>
        )
    }
}

export default Pub;




