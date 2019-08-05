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
                {/* <div className="" >
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
                </div> */}
              </nav>
            </div>
          </div>
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
              {/* <table className="mx-auto" id="t01">
                <tr>
                  <th>name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>State</th>
                  <th>Localty</th>
                  <th>Account type</th>
                  <th></th>
                </tr>
                <tr>
                  <td>hawau</td>
                  <td>Sale</td>
                  <td>duplex</td>
                  <td>Lagos</td>
                  <td>Yaba</td>
                  <td>premium</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">View</button>
                  </td>
                </tr>
                <tr>
                  <td>hawau</td>
                  <td>Sale</td>
                  <td>duplex</td>
                  <td>Lagos</td>
                  <td>Yaba</td>
                  <td>premium</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">View</button>
                  </td>
                </tr>
                <tr>
                  <td>hawau</td>
                  <td>Sale</td>
                  <td>duplex</td>
                  <td>Lagos</td>
                  <td>Yaba</td>
                  <td>premium</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">View</button>
                  </td>
                </tr>
                <tr>
                  <td>hawau</td>
                  <td>Sale</td>
                  <td>duplex</td>
                  <td>Lagos</td>
                  <td>Yaba</td>
                  <td>premium</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">View</button>
                  </td>
                </tr>
                <tr>
                  <td>hawau</td>
                  <td>Sale</td>
                  <td>duplex</td>
                  <td>Lagos</td>
                  <td>Yaba</td>
                  <td>premium</td>
                  <td>
                    <button type="button" name="button" className="btn-dark">View</button>
                  </td>
                </tr>


              </table>*/}
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
        </div>*/}
        <Footer />

      </React.Fragment>
    )
  }
}

export default Requests;