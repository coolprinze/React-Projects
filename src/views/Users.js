import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { getGlobal, useGlobal } from 'reactn'
import {
  MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBSpinner
} from 'mdbreact'
import { Link } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import '../notifications.css'
import API from '../utils/api'
let api = new API();

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.manageUser = this.manageUser.bind(this);
  }
  async manageUser(id, url_text) {
    
    let result = await api.manageUser(id, url_text)
    await this.setState({ loading: false });
    if (url_text === 'suspend') {
      url_text = 'suspende';
    }
    if (result) {
      await NotificationManager.success('Success', `User ${url_text}d`)
    }
    else {
      await NotificationManager.error('Error', `User not ${url_text}d`)
    }
  }
  createNotification = (type, message) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error', message, 5000);
          break;
      }
    };
  };
  render() {
    const columns = [
      {
        label: 'First Name',
        field: 'fname'
      },
      {
        label: 'Last Name',
        field: 'lname'
      },
      {
        label: 'Email',
        field: 'email'
      },
      {
        label: 'Account Type',
        field: 'type'
      },
      {
        field: 'btn'
      },
      {
        field: 'btn'
      }
    ];

    const rows = getGlobal().users.map((user) => {
      return {
        'fname': user.name.split(" ")[0],
        'lname': user.name.split(" ")[1],
        'email': user.email,
        'type': user.role.name,
        'btn': <button type="button" style={{ backgroundColor: '#000', color: "#fff" }} name="button" onClick={this.createNotification('error', 'Not implemented yet')}>
         {/* <Link to={"/notfound"} > */}
          View
           {/* </Link> */}
           </button>,
        'more': <MDBDropdown>
          <MDBDropdownToggle style={{ backgroundColor: '#000' }}>
            <img src="images/Group9.png" alt="" />
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem onClick={this.createNotification('error', 'Not implemented yet')}>Edit</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={this.createNotification('error', 'Not implemented yet')}>Delete</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={async () => { await this.manageUser(user.id, user.suspended_at ? 'restore' : 'suspend') }}>{!user.suspended_at ? "Suspend" : "Restore"}</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      }
    })
    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", "text", "text", true, "text"]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Users</p>
              </nav>
              <NotificationContainer />
              <MDBDataTable
                striped
                bordered
                hover
                data={{ rows, columns }}
                style={{ backgroundColor: "#f8f9fa" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Users;