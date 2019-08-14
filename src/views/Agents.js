import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import AddAgent from './AddAgent'
import { Link } from 'react-router-dom';
import { getGlobal } from 'reactn'
import {
  MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import '../notifications.css'
import API from '../utils/api'
let api = new API();

class Agents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal14: false,
      loading: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  async manageUser(id, url_text) {

    let result = await api.manageUser(id, url_text)
    await this.setState({ loading: false });
    if (url_text === 'suspend') {
      url_text = 'suspende';
    }
    if (result) {
      await NotificationManager.success('Success', `Agemt ${url_text}d`)
    }
    else {
      await NotificationManager.error('Error', `Agent not ${url_text}d`)
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
        label: 'Name',
        field: 'name',
        // sort: 'asc'
      },
      {
        label: 'Phone Number',
        field: 'phone',
        // sort: 'asc'
      },
      {
        label: 'Email',
        field: 'email',
        // sort: 'asc'
      },
      {
        field: 'btn',
        // sort: 'asc'
      },
      {
        field: 'sendemail',
        // sort: 'asc'
      },
      {
        field: 'icon',
        // sort: 'asc'
      }
    ];

    const rows = getGlobal().agents.map((agent) => {
      return {
        'name': agent.name,
        'phone': agent.id,
        'email': agent.email,
        'btn': <button type="button" style={{ backgroundColor: '#000' }} name="button">
          <Link to={{pathname: `/agents/${agent.id}` }} >
            View Listings
        </Link>
        </button>,

        'sendemail': <button type="button" name="button" style={{ backgroundColor: '#000' }} className="rounded-circle">
          <img src="images/Group(1).png" alt="" />
        </button>,
        'icon': <MDBDropdown>
          <MDBDropdownToggle style={{ backgroundColor: '#000' }}>
            <img src="images/Group9.png" alt="" />
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem onClick={this.createNotification('error', 'Not implemented yet')}>Edit</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={this.createNotification('error', 'Not implemented yet')}>Delete</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={async () => { await this.manageUser(agent.id, agent.suspended_at ? 'restore' : 'suspend') }}>{!agent.suspended_at ? "Suspend" : "Restore"}</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        // <div className="drop">
        //   <button style={{backgroundColor: '#000'}} className="dropbutton rounded-circle"> <img src="images/Group9.png" alt="" /></button>
        //   <div className="drop-content dropdown-menu" id="dropDownCont">
        //     <a href="#">edit</a>
        //     <a href="#">delete</a>
        //     <a href="#">suspend</a>
        //   </div>
        // </div>,
      }
    })

    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", true, "text", "text", "text"]} />
        <div className="container">
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Agents</p>
                <div className="" >
                  <span className="form-inline">
                    <div className="drop">
                      <AddAgent
                        // isOpen={this.state.modal14} 
                        toggle={this.toggle} onClick={this.createNotification('error', 'Not implemented yet')} />

                    </div>
                  </span>
                </div>
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

export default Agents;