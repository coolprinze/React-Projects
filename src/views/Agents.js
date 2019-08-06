import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom';
import {getGlobal} from 'reactn'
import {MDBDataTable, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact'

class Agents extends Component {
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
        'btn': <button type="button" style={{backgroundColor: '#000'}} name="button"> <Link to={"/agents/dasdad"} >View Listings </Link></button>,
        
        'sendemail': <button type="button" name="button" style={{backgroundColor: '#000'}} className="rounded-circle">
          <img src="images/Group(1).png" alt="" />
        </button>,
        'icon': <MDBDropdown>
        <MDBDropdownToggle  style={{backgroundColor: '#000'}}>
        <img src="images/Group9.png" alt="" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>Edit</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Delete</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Suspend</MDBDropdownItem>
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
                <button type="button" name="button" className="mr-auto">Add Agent</button>
                <div className="" >
                  <span className="form-inline">
                    <div className="drop">
                      <button className="dropbutton btn btn-light"> Sort</button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">Alphabetically</a>
                        <a href="#">Agents</a>
                        <a href="#">Individual</a>
                      </div>
                    </div>
                  </span>
                </div>
              </nav>
              <MDBDataTable
                striped
                bordered
                hover
                data={{rows, columns}}
                style={{backgroundColor: "#f8f9fa"}}
              />
              {/* <table className="mx-auto" id="t01">

                <tr>
                  <th>Name</th>
                  <th>Telephone</th>
                  <th>E-mail</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>Adebi Adebayo</td>
                  <td>0703555251</td>
                  <td>AdebiAdebayo@gmail.com</td>
                  <td>
                    <button type="button" name="button"> <a href="admin_agents_listing.html">View Listings</a></button>
                  </td>
                  <td>
                    <button type="button" name="button" className="rounded-circle">
                      <img src="images/Group(1).png" alt="" />
                    </button>
                  </td>
                  <td>
                    <div className="drop">
                      <button className="dropbutton rounded-circle"> <img src="images/Group9.png" alt="" /></button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">edit</a>
                        <a href="#">delete</a>
                        <a href="#">suspend</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>D Properties Development...</td>
                  <td>0703555251</td>
                  <td>Deba@dpropertiesdevelopment.com</td>
                  <td>
                    <button type="button" name="button"> <a href="admin_agents_listing.html">View Listings</a></button>
                  </td>
                  <td>
                    <button type="button" name="button" className="rounded-circle">
                      <img src="images/Group(1).png" alt="" />
                    </button>
                  </td>
                  <td>
                    <div className="drop">
                      <button className="dropbutton rounded-circle"> <img src="images/Group9.png" alt="" /></button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">edit</a>
                        <a href="#">delete</a>
                        <a href="#">suspend</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>D Properties Development...</td>
                  <td>0703555251</td>
                  <td>Deba@dpropertiesdevelopment.com</td>
                  <td>
                    <button type="button" name="button"> <a href="admin_agents_listing.html">View Listings</a></button>
                  </td>
                  <td>
                    <button type="button" name="button" className="rounded-circle">
                      <img src="images/Group(1).png" alt="" />
                    </button>
                  </td>
                  <td>
                    <div className="drop">
                      <button className="dropbutton rounded-circle"> <img src="images/Group9.png" alt="" /></button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">edit</a>
                        <a href="#">delete</a>
                        <a href="#">suspend</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>D Properties Development...</td>
                  <td>0703555251</td>
                  <td>Deba@dpropertiesdevelopment.com</td>
                  <td>
                    <button type="button" name="button"> <a href="admin_agents_listing.html">View Listings</a></button>
                  </td>
                  <td>
                    <button type="button" name="button" className="rounded-circle">
                      <img src="images/Group(1).png" alt="" />
                    </button>
                  </td>
                  <td>
                    <div className="drop">
                      <button className="dropbutton rounded-circle"> <img src="images/Group9.png" alt="" /></button>
                      <div className="drop-content dropdown-menu-right" id="dropDownCont">
                        <a href="#">edit</a>
                        <a href="#">delete</a>
                        <a href="#">suspend</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </table> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1-10 of 60</a></li>

                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Agents;