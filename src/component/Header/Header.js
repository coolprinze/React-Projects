import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';

class Header extends Component{
    constructor(props) {
        super(props)
    }

    onLogout = () => {
        this.props.logOut();
    }

    render(){

        const action = this.props.user? 
        <span className="nav-link">Hi {this.props.user.username} ! | <Link to="#" onClick={this.onLogout}> Logout</Link></span>
        :
        <Link className="nav-link" to="/login">Login/Register</Link>

        return ( 
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                    <div className="container-fluid px-lg-5">
                    <Link to="/" className="navbar-brand logo">
                        <img src="assets/img/logo.png" className="d-inline-block align-top" alt="" />
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse justify-content-end collapse show" id="navbarResponsive">
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-item d-flex align-items-center justify-content-center">
                                {/* <Link className="py-1 home-phone" to="#">09883833232</Link> */}
                            </li>
                            <li className="nav-item active">
                                <Link to="/propertylisting" className="nav-link">Property Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/propertyadvice-categories">Property Advice</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/advertise-with-us">Advertise in our Magazine</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                {action}
                            </li>
                            <li className="nav-item d-flex align-items-center justify-content-center pb-2" id="sp-btn">
                                <Link className="nav-link btn btn-lg px-5 py-3 btn-outline-dark" to="#">Submit Property</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header> 
        )
    }
}

export default connect(null, { logOut })(Header);