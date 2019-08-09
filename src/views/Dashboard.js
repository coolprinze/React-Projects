import React, { Component } from 'react'
import Header from '../component/Header'
import List from './List'
import Footer from '../component/Footer'
import Metrics from '../component/Metrics'
import { getGlobal, useGlobal } from 'reactn'
import { 
  MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBSpinner } from 'mdbreact'
import {Link} from 'react-router-dom'
import API from '../utils/api'
let api = new API();

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal14: false,
      loading: false
    }
    this.toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
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
        'status': property.published ? <span style={{color: "green"}}>Available</span> : <span style={{color: "red"}}>Unavailable</span>,
        'date': property.created_at,
        'btn': <button type="button" style={{ backgroundColor: '#000' }} name="button"> <Link to={"/notfound"} > View </Link></button>,
        'more': <MDBDropdown>
        <MDBDropdownToggle style={{ backgroundColor: '#000' }}>
          <img src="images/Group9.png" alt="" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>Edit</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Delete</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem onClick={async() => {await api.approveDisapproveProperty({"id": [property.id]}, property.published); await this.setState({loading: false})}}>{!property.published ? "Approve" : "Disapprove"}</MDBDropdownItem>
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
              </nav>
              <MDBDataTable
                striped
                bordered
                hover
                data={{rows, columns}}
                style={{backgroundColor: "#f8f9fa"}}
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