import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Dashboard extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
          <React.Fragment>
            <nav className="navbar bg-white">
              <Link className="navbar-brand"> <img src="images/logo.jpg" alt=""/> </Link>
              <div className="" >
                <form className="form-inline">
                  <button className="btn btn-outline-dark" type="button"> <Link to="send_newsletter.html">Send Newsletter</Link></button>
                  <div className="dropdown">
                    <Link to="#" className=" nav-item nav-link dropdown-toggle mr-md-2"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src="images/Path.png" alt=""/></Link>
                    <div classNameName="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item" to="#">Action</Link>
                      <Link className="dropdown-item" to="#">Another</Link>
                      <Link className="dropdown-item" to="#">Something</Link>
                    </div>
                  </div>
                </form>
              </div>
            </nav>
          </React.Fragment>
        )
    }
}

export default Dashboard;