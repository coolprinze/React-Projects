import React, { Component } from 'react';



class Dashboard extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-white">
          <a className="navbar-brand" href="#"> <img src="images/logo.jpg" alt="" /> </a>
          <div className="" >
            <form className="form-inline">
              <button className="btn btn-outline-dark" type="button"> <a href="send_newsletter.html">Send Newsletter</a></button>
              <div className="dropdown">
                <a href="#" className=" nav-item nav-link dropdown-toggle mr-md-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src="images/Path.png" alt="" /></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another</a>
                  <a className="dropdown-item" href="#">Something</a>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <a href="#" className=" col active0">
              <div className="">
                <h1>1300</h1>
                <p>total lists</p>
              </div>
            </a>
            <a href="admin_agents.html" className="col text">
              <div>
                <h1>1300</h1>
                <p>Agent Lists</p>
              </div>
            </a>
            <a href="admin_agents.html" className="col text">
              <div>
                <h1>1300</h1>
                <p>Requests</p>
              </div>
            </a>
            <a href="admin_users.html" className="col text">
              <div>
                <h1>68</h1>
                <p>Users</p>
              </div>
            </a>
            <a href="admin_agents.html" className="col text">
              <div>
                <h1>930</h1>
                <p>Reports</p>
              </div>
            </a>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar bg-dark" style={{borderRadius: "4px 4px 0px 0px;"}}>
                <p className="navbar-brand myp"> All Listings</p>
                <div className="" >
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
          <div className="row" style={{marginBlockEnd: "1em;"}}>
            <div className="col-12" style={{}}>
              <table className="mx-auto" id="t01">
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
      </React.Fragment>
    )
  }
}

export default Dashboard;