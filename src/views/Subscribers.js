import React, { Component } from 'react'
import { getGlobal } from 'reactn'
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { MDBBtn, MDBDataTable } from 'mdbreact'

class Subscribers extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    const columns = [
      {
        label: 'First Name',
        field: 'fame'
      },
      {
        label: 'Last Name',
        field: 'lame'
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
        label: '',
        field: 'action'
      }
      
    ];

    const rows = getGlobal().users.map((user) => {
      return {
        'fname': user.name,
        'lname': user.name,
        'email': user.email,
        'type': user.type
      }
    })
    return (
      <React.Fragment>
        <Header />
        {/* <Metrics active={[true, "text", "text", "text", "text"]} /> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
            <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px", marginTop: "50px" }}>
                <p className="navbar-brand myp"> All Subscribers</p>
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

export default Subscribers;