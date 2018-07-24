import React, { Component } from 'react'

import Header from '../components/headfoot/header'
import Footer from '../components/headfoot/footer'
import ContainerLeft from '../components/containerLeft'
import ContainerRight from '../components/containerRight'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { childUpdateFn, removeFn } from '../redux/actions'

class App extends Component {

    static propTypes = {
        childUpdateFn: PropTypes.func.isRequired,
        removeFn: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired
    }

    render(){
        let {list, childUpdateFn, removeFn} = this.props

        return (
            <div>
                <Header />

                <div className="container">
                    <div className="containerLeft">
                        <ContainerLeft updateFn={childUpdateFn}/>
                    </div>
                    <div className="containerRight">
                        <ContainerRight removeFn={removeFn} result={list}/>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({list:state}), { childUpdateFn, removeFn }
)(App)