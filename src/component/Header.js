import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import path from '../assets/img/Path.png'

class Header extends Component {
  render() {
    return (
      <nav className="navbar bg-white">
        <a className="navbar-brand" href="#"> <img src={logo} alt="Castles" /> </a>
        <div className="" >
          <span className="form-inline">
            <button className="btn btn-outline-dark" type="button"> <a href="send_newsletter.html">Send Newsletter</a></button>
            <div className="dropdown">
              <a href="#" className=" nav-item nav-link dropdown-toggle mr-md-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src={path} alt="" /></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another</a>
                <a className="dropdown-item" href="#">Something</a>
              </div>
            </div>
          </span>
        </div>
      </nav>
    )
  }
}

export default Header;