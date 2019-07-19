import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
          <footer>
          <section className="section-padding footer bg-dark mt-5">
              <div className="container ">
                  <div className="row">
                      <div className="col-lg-3">
                          <h4 className="mb-5 "><img src="assets/img/logo.png" alt="" /></h4>
                          <div className="text-white">
                              <a href="#" className="footer"><i className="fa fa-facebook px-2 "></i></a>
                              <a href="#" className="footer"><i className="fa fa-twitter px-2"></i></a>
                              <a href="#" className="footer"><i className="fa fa-instagram px-2 "></i></a>
                              <a href="#" className="footer"><i className="fa fa-google px-2 "></i></a>
                          </div>
      
                      </div>
                      <div className="col-lg-5 col-md-5 ">
                          <h3 className="mb-4 text-white ">Get in touch</h3>
                          <ul>
                              <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                  <span className="fa fa-map-marker pr-3 footer "></span> 285A Corperation Drive, Doliphin Estate, Ikoyi
                              </li>
                              <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                  <span className="fa fa-phone pr-3 footer "></span> 080-3473-9837
                              </li>
                              <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                  <span className="fa fa-envelope pr-3 footer "></span> advert@castlesweekly.com, enquires@castles.com.ng
                              </li>
                            </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 pl-4 ">
                          <h3 className="mb-4 text-white ">Property Cities</h3>
                          <div className="row ">
                              <div className="col-sm-6 ">
                                  <ul>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Lekki
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Bannana Island
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Ikeja
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-sm-6 ">
                                  <ul>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Ikoyi
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Lekki Phase 1
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                          Victorial Island
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row pt-3 mt-5 " style={{borderTop: '1px solid #ffffff'}}>
                      <h5 className="text-white ">&copy; 2019 Castles by RealHouse Communications Limited</h5>
                  </div>
              </div>
          </section>
      </footer>
        )

    }

}

export default App;