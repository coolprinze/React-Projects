import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { getGlobal, useGlobal } from 'reactn'
import {
  MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBSpinner
} from 'mdbreact'
import {Link} from 'react-router-dom'

import API from '../utils/api'
let api = new API();

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
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
        // 'status': property.published ? <span style={{ color: "green" }}>Available</span> : <span style={{ color: "red" }}>Unavailable</span>,
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
            <MDBDropdownItem onClick={async() => { await api.manageUser(user.id, user.suspended_at ? 'restore' : 'suspend'); await this.setState({loading: false})}}>{!user.suspended_at ? "Suspend" : "Restore"}</MDBDropdownItem>
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
                {/*<div>
                   <form className="form-inline">
                    <input type="search" name="" value="" placeholder="Find..." className="Search" />
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
                </div>*/}
              </nav>
              <MDBDataTable
                striped
                bordered
                hover
                data={{ rows, columns }}
                style={{ backgroundColor: "#f8f9fa" }}
              />
            </div>
          </div>
          {/* <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
              <table className="mx-auto" id="t01">
                <tr>
                  <th>first name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Account type</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>Individual</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_users_listing.html">view</a></button>
                  </td>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>Individual</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_users_listing.html">view</a></button>
                  </td>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>Individual</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_users_listing.html">view</a></button>
                  </td>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>Individual</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_users_listing.html">view</a></button>
                  </td>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>Individual</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_users_listing.html">view</a></button>
                  </td>
                </tr>


              </table>
            </div>
          </div> */}
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1 to 10 of 60</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Users;