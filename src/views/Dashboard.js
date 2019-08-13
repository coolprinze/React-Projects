import React, { Component } from 'react'
import Header from '../component/Header'
import List from './List'
import Footer from '../component/Footer'
import Metrics from '../component/Metrics'
import { getGlobal } from 'reactn'
import {
  MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNotification
} from 'mdbreact'
import { Link } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import '../notifications.css'
import API from '../utils/api'
let api = new API();

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal14: false,
    }
    this.toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }
    this.handleApproval = this.handleApproval.bind(this);
    this.createNotification = this.createNotification.bind(this)
  }
  async handleApproval(body, published) {
    console.log(body, published)
    const result = await api.approveDisapproveProperty(body, published);
    console.log(result)
    await this.setState({})
    if(result) {
      await NotificationManager.success('Success', `Property ${published}d`)
    }
    else {
      await NotificationManager.error('Error', `Property not ${published}d`)
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
  deleteProperty = async (id) => {
    let result = await api.deleteProperty(id);
    console.log(result)
    if (!!result) {
      NotificationManager.success('Success', 'Property deleted')
    }
    else {
      NotificationManager.error('Error', 'Property not deleted')
    }
  }
  render() {
    const columns = [
      {
        label: 'Property Type',
        field: 'type'
      },
      {
        label: 'Location',
        field: 'location'
      },
      {
        label: 'Agent Name',
        field: 'agent_name'
      },
      {
        label: 'Price',
        field: 'price'
      },
      {
        label: 'Status',
        field: 'status'
      },
      {
        label: 'Date Added',
        field: 'date'
      },
      {
        field: 'btn'
      },
      {
        field: 'more'
      }
    ];

    const rows = getGlobal().properties.map((property) => {
      return {
        'type': property.type,
        'location': `${property.locality}, ${property.state}`,
        'agent_name': property.agent.name,
        'price': property.price,
        'status': property.published === true ? <span style={{ color: "green" }}>Available</span> : <span style={{ color: "red" }}>Unavailable</span>,
        'date': property.created_at,
        'btn': <button type="button" style={{ backgroundColor: '#000' }} name="button"> <Link to={"/notfound"} > View </Link></button>,
        'more': <MDBDropdown>
          <MDBDropdownToggle style={{ backgroundColor: '#000' }}>
            <img src="images/Group9.png" alt="" />
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem><Link to={{pathname: "/property/add", state: {property}}}>Edit</Link></MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={() => this.deleteProperty(property.id)}>Delete</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={async () => { await this.handleApproval({ "id": [property.id] }, property.published === false ? 'approve' : 'disapprove'); }}>{property.published === false ? "Approve" : "Disapprove"}</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      }
    })
    return (
      <React.Fragment>
        <Header />
        <Metrics active={[true, "text", "text", "text", "text"]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Listings</p>
                <div className="" >
                  <span className="form-inline">
                    <div className="drop">
                      <Link to={"/property/add"}> Add Property</Link>
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


export default Dashboard;