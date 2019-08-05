import React, { Component } from 'react'
import Header from '../component/Header'
import List from './List'
import Footer from '../component/Footer'
import Metrics from '../component/Metrics'
import { getGlobal } from 'reactn'
import { MDBBtn, MDBDataTable, MDBTableBody, MDBTableHead } from 'mdbreact'


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal14: false

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
        label: 'Type',
        field: 'type',
        // sort: 'asc'
      },
      {
        label: 'Location',
        field: 'location',
        // sort: 'asc'
      },
      {
        label: 'Agent Name',
        field: 'agent_name',
        // sort: 'asc'
      },
      {
        label: 'Price',
        field: 'price',
        // sort: 'asc'
      },
      {
        label: 'Status',
        field: 'status',
        // sort: 'asc'
      },
      {
        label: 'Date Added',
        field: 'date',
        // sort: 'asc'
      }
    ];

    const rows = getGlobal().properties.map((property) => {
      return {
        'type': property.type,
        'location': `${property.locality}, ${property.country}`,
        'agent_name': property.agent.name,
        'price': property.price,
        'status': property.status,
        'date': property.created_at,
      }
    })
    const data = {
      columns, rows
    }
    return (
      <React.Fragment>
        <Header />
        <Metrics active={[true, "text", "text", "text", "text"]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Listings</p>
                {/* <div>
                  <span className="form-inline">
                    <input type="search" name="" defaultValue="" placeholder="Find..." className="Search" />
                    <button className="btn btn-light" type="button" name="button">Date</button>
                    <div className="drop">
                      <button className="dropbutton btn btn-light"> Sort</button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">Alphabetically</a>
                        <a href="#">Agents</a>
                        <a href="#">Individual</a>
                      </div>
                    </div>
                  </span>
                </div> */}
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
        {/*  <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p className="navbar-brand myp"> All Listings</p>
                <div className="" >
                  <form className="form-inline">
                    <input type="search" name="" defaultValue="" placeholder="Find..." className="Search" />
                    <button className="btn btn-light" type="button" name="button">Date</button>
                    <div className="drop">
                      <button className="dropbutton btn btn-light"> Sort</button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">Alphabetically</a>
                        <a href="#">Agents</a>
                        <a href="#">Individual</a>
                      </div>
                    </div>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12" style={{}}>
              <table className="mx-auto" id="t01">
              <tbody>
                <tr>
                  <th>Property type</th>
                  <th>Location</th>
                  <th>Agent name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Date Added</th>
                  <th></th>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="Available">Available</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <div>
                    <List isOpen={this.state.modal14} toggle={this.toggle} />
                    </div>
                   <button type="button" name="button" className="btn-dark" onClick={() => this.toggle(14)}>view</button> 
                  </td>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="Available">Available</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">view</button>
                  </td>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="Available">Available</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">view</button>
                  </td>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="unavailable">Unavailable</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">view</button>
                  </td>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="unavailable">Unavailable</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">view</button>
                  </td>
                </tr>
                <tr>
                  <td>4 Bedroom flat</td>
                  <td>Ikoyi</td>
                  <td>majjor houses</td>
                  <td>3 Bedroom flat</td>
                  <td className="unavailable">Unavailable</td>
                  <td>3 Bedroom flat</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">view</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1-10 of 60</a></li>

                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>*/}
        <Footer />
      </React.Fragment>
    )
  }
}


export default Dashboard;