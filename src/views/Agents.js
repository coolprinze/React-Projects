import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'

class Agents extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {

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
                  <form className="form-inline">
                    <input type="search" name="" value="" placeholder=" Find..." className="Search" />
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
              <table className="mx-auto" id="t01">
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