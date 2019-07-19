import React, { Component } from 'react';


class App extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
          <div>
          <div className="container-fluid search-bar d-flex align-items-center flex-xl-row">
          <section className="container">
              <ul className="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                  <li className="col-lg-3 d-flex flex-column justify-content-center align-items-center px-0 py-1 text-center">
                      <input type="search" name="" className="form-control px-2 py-4" id="" placeholder="Lekki, Lagos"/>
                  </li>
                  <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                      <div className="dropdown">
                          <button className="dropdown-toggle custom-drp text-uppercase text-white px-0 pb-3" type="button" id="types_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Location
                                  </button>
                          <div className="dropdown-menu" aria-labelledby="types_drp">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </div>
                  </li>
                  <div className="border-right pl-0" style={{height: '79px'}}></div>
                  <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                      <div className="dropdown">
                          <button className="dropdown-toggle custom-drp text-uppercase text-white px-0 pb-3" type="button" id="bedroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Min Price
                                  </button>
                          <div className="dropdown-menu" aria-labelledby="bedroom_drp">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </div>
                  </li>

                  <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center text-white">
                      <div className="text-white px-0 pb-3">to</div>
                  </li>

                  <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                      <div className="dropdown">
                          <button className="dropdown-toggle custom-drp text-uppercase text-white px-0 pb-3" type="button" id="bedroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Max Price
                                      </button>
                          <div className="dropdown-menu" aria-labelledby="bedroom_drp">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </div>
                  </li>
                  <div className="border-right pl-0" style={{height: '79px'}}></div>
                  <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                      <div className="dropdown">
                          <button className="dropdown-toggle custom-drp text-uppercase text-white px-0 pb-3" type="button" id="price_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Property type
                                  </button>
                          <div className="dropdown-menu" aria-labelledby="price_drp">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </div>
                  </li>
                  <div className="border-right pl-0" style={{height: '79px'}}></div>
                  <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                      <div className="dropdown">
                          <button className="dropdown-toggle custom-drp text-uppercase text-white px-0 pb-3" type="button" id="bathroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      bathrooms
                                  </button>
                          <div className="dropdown-menu" aria-labelledby="bathroom_drp">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </div>
                  </li>

              </ul>
          </section>
    </div>
    <div className="container-fluid d-flex align-items-center" style={{backgroundColor:'#FFFFFF', minHeight: '80px', borderBottom: '1px solid #FFFFFF'}}>

    <div className="container py-3" style={{borderBottom: '1px solid #000000'}}>
        <div className="row">
            <div className="col-sm-4">
                Property for sale in Lekki, Nigeria
            </div>
            <div className="col-sm-2">
                <a href="" data-toggle="modal" data-target="#createAlert">
                    <img src="assets/img/icon/bell-sm.png" className="pr-2" alt=""/> Create Alert
                </a> 
            </div>

            <div className="col-sm-3">
                Can't find what you are looking for?
            </div>
            <div className="col-sm-3 pr-0">
                <button className="btn btn-lg btn-outline-dark pull-right">Post a Request</button>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid d-flex align-items-center" style={{backgroundColor:'#FFFFFF', height: '80px'}}>
            <div className="container  d-flex align-items-center justify-content-between">
                <h6>Result 1 - 20 of 22,692</h6>
                <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Most Recent
                            </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>

</div>
        )

    }

}

export default App;