import React, { Component } from 'react';

class Header extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
               <header>
                  <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                      <div className="container-fluid px-lg-5">
                          <a className="navbar-brand logo" href="dashboard.html">
                              <img src="assets/img/logo.png" className="d-inline-block align-top" alt="" />
                          </a>
                          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                          <div className="navbar-collapse justify-content-end collapse show" id="navbarResponsive">
                              <ul className="navbar-nav justify-content-between">
                                  <li className="nav-item d-flex align-items-center justify-content-center">
                                      <a className="py-1 home-phone" href="#">09883833232</a>
                                  </li>
                                  <li className="nav-item active">
                                      <a className="nav-link" href="#">Property Search <span className="sr-only">(current)</span></a>
                                  </li>
                                  <li className="nav-item">

                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="propertyadvice.html">Property Advice</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Advertise in our Magazine</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="">About</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="../login.html">Login/Register</a>
                                  </li>
                                  <li className="nav-item d-flex align-items-center justify-content-center pb-2" id="sp-btn">
                                      <a className="nav-link btn btn-lg px-5 py-3 btn-outline-dark" href="#">Submit Property</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header> 
        )

    }

}

export default Header;