import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'

class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", "text", "text", "text", true]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>

                <p className="navbar-brand myp"> All Reports</p>
                <div>
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
                </div>
              </nav>
            </div>
          </div>
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
              <table className="mx-auto" id="t01">
                <tr>
                  <th>first name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Property</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
                  </td>
                </tr>

                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
                  </td>
                </tr>

                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
                  </td>
                </tr>

                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
                  </td>
                </tr>

                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
                  </td>
                </tr>

                <tr>
                  <td>Toyin</td>
                  <td>Ikoyi</td>
                  <td>hawau.olamide.th@gmail.com</td>
                  <td>duplex</td>
                  <td>
                    <button type="button" name="button" className="btn-dark"> <a href="admin_report_listing.html">view</a></button>
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
                  <li className="page-item"><a className="page-link" href="#">1 to 10 of 60</a></li>
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

export default Reports;