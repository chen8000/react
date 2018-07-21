

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    static propTypes = {
        setStateName : PropTypes.func.isRequired
    }

    state = {
        searchVal:''
    }

    setStateName = () => {

        this.props.setStateName(this.state.searchVal);
    }

    searchVal = (event) => {
        let searchVal = event.target.value;

        this.setState({ searchVal })
    }

    render(){
        return (
            <div className="searchBox">
                <h3>Seach Github Users</h3>
                <input onChange={this.searchVal} value={this.state.searchVal} type="text" placeholder="search"/>
                <input type="button" value="Search" onClick={this.setStateName}/>
            </div>
        )
    }
}

export default Search;








