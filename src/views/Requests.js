import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { getGlobal } from 'reactn'
import { MDBBtn, MDBDataTable } from 'mdbreact'

class Requests extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    const columns = [
      {
        label: 'Name',
        field: 'name',
        // sort: 'asc'
      },
      {
        label: 'Category',
        field: 'category',
        // sort: 'asc'
      },
      {
        label: 'Type',
        field: 'type',
        // sort: 'asc'
      },
      {
        label: 'State',
        field: 'state',
        // sort: 'asc'
      },
      {
        label: 'Locality',
        field: 'locality',
        // sort: 'asc'
      },
      {
        label: 'Account Type',
        field: 'account_type',
        // sort: 'asc'
      }
    ];

    const rows = getGlobal().requests.map((request) => {
      return {
        'name': request.user.name,
        'category': request.category,
        'type': request.type,
        'state': request.state,
        'locality': request.locality,
        'account_type': request.account_type,
      }
    })
    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", "text", true, "text", "text"]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Requests</p>
               
              </nav>
            </div>
          </div>
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
             
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

export default Requests;