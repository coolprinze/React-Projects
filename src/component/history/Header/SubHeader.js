import React, { Component } from 'react';
import {Route} from "react-router-dom"

class SubHeader extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return ( 
            <div class="container-fluid search-bar d-flex align-items-center">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-12 py-3 px-0">
                                <h4 class="text-white">Hi, {this.props.username}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default SubHeader;


