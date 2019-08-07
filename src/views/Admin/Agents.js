import React, { Component } from 'react';
import Header from "../../component/Header/UserHeader"


class Agents extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <React.Fragment>
                <Header />
                <h3>List of Agents</h3>
            </React.Fragment>
        )
    }
}

export default Agents;