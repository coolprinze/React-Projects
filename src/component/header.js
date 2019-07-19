import React, { Component } from 'react';
import './App.css';

class App extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
            <div>
               <header>
                  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                      <div class="container-fluid px-lg-5">
                          <a class="navbar-brand logo" href="dashboard.html">
                              <img src="../img/logo.png" class="d-inline-block align-top" alt="" />
                          </a>
                          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                          <div class="navbar-collapse justify-content-end collapse show" id="navbarResponsive">
                              <ul class="navbar-nav justify-content-between">
                                  <li class="nav-item d-flex align-items-center justify-content-center">
                                      <a class="py-1 home-phone" href="#">09883833232</a>
                                  </li>
                                  <li class="nav-item active">
                                      <a class="nav-link" href="#">Property Search <span class="sr-only">(current)</span></a>
                                  </li>
                                  <li class="nav-item">

                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="propertyadvice.html">Property Advice</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Advertise in our Magazine</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="">About</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="../login.html">Login/Register</a>
                                  </li>
                                  <li class="nav-item d-flex align-items-center justify-content-center pb-2" id="sp-btn">
                                      <a class="nav-link btn btn-lg px-5 py-3 btn-outline-dark" href="#">Submit Property</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header> 
            </div>
        )

    }

}

export default App;