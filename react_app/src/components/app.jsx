import React, { Component } from 'react';

import Header from './headfoot/header';
import Footer from './headfoot/footer';
import ContainerLeft from './containerLeft';
import ContainerRight from './containerRight';

export default class App extends Component {
    render(){
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="containerLeft">
                        <ContainerLeft />
                    </div>
                    <div className="containerRight">
                        <ContainerRight />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}