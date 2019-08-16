import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdbreact'
import logo from '../assets/img/logo.png'
import path from '../assets/img/Path.png'
import './Header.css';
import Auth from '../utils/auth';
let auth = new Auth();

class Header extends Component {
  render() {
    
    return (
      <nav className="navbar bg-white">
        <Link className="navbar-brand" to={"/"}> <img src={logo} alt="Castles" /> </Link>
        <div>
          <span className="form-inline">
            <button className="btn btn-outline-dark" type="button"> <Link to={"/newsletter"}>Send Newsletter</Link></button>
            <MDBDropdown>
              <MDBDropdownToggle caret style={{backgroundColor: 'transparent', border: 'none', 'border:focus': 'transparent', ".dropdown-toggle::after": "black"}}>
              <img src={path} alt="" />
              </MDBDropdownToggle>
              <MDBDropdownMenu right basic>
                <MDBDropdownItem onClick={() => auth.logout()}>Log Out</MDBDropdownItem>
                {/* <MDBDropdownItem divider /> */}
                {/* <MDBDropdownItem onClick={this.createNotification('error', 'Not implemented yet')}>Delete</MDBDropdownItem> */}
                {/* <MDBDropdownItem divider /> */}
                {/* <MDBDropdownItem onClick={async () => { await this.manageUser(agent.id, agent.suspended_at ? 'restore' : 'suspend') }}>{!agent.suspended_at ? "Suspend" : "Restore"}</MDBDropdownItem> */}
              </MDBDropdownMenu>
            </MDBDropdown>
            {/* <div className="dropdown">
              <a href="#" className=" nav-item nav-link dropdown-toggle mr-md-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src={path} alt="" /></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another</a>
                <a className="dropdown-item" href="#">Something</a>
              </div>
            </div> */}
          </span>
        </div>
      </nav>
    )
  }
}

export default Header;