import React, { Component } from 'react';
import {Link} from "react-router-dom"
import logo from './logo.png'


class UserHeader extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <header className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                    <div className="container-fluid px-lg-5">
                        <a className="navbar-brand logo" href="index.html">
                            <img src={logo} className="d-inline-block align-top" alt=""/>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end collapse show" id="navbarResponsive">
                            <div className="navbar-collapse justify-content-end collapse show" id="navbarResponsive">
                                <ul className="navbar-nav justify-content-between">
                                    <li className="nav-item d-flex align-items-center justify-content-center">
                                        <a className="py-1 home-phone" href="#">09883833232</a>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/post-request"><a className="nav-link">Post Request<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item">
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/notfound"><a className="nav-link">Property Advice<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/propertylisting"><a className="nav-link">Property Listing<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/notfound"><a className="nav-link">Property View<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile"><a className="nav-link">User Profile<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login"><a className="nav-link">Login/Register<span className="sr-only">(current)</span></a></Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center justify-content-center pb-2" id="sp-btn">
                                        <a className="nav-link btn btn-lg px-5 py-3 btn-outline-dark" href="#">Submit Property</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default UserHeader;