import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar bg-white">
        <a className="navbar-brand" href="#"> <img src="images/logo.jpg" alt="" /> </a>
        <div className="" >
          <form className="form-inline">
            <button className="btn btn-outline-dark" type="button"> <a href="send_newsletter.html">Send Newsletter</a></button>
            <div className="dropdown">
              <a href="#" className=" nav-item nav-link dropdown-toggle mr-md-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src="images/Path.png" alt="" /></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another</a>
                <a className="dropdown-item" href="#">Something</a>
              </div>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header;