import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadPage, searchProperties } from '../actions';
import { UNLOAD_PAGE } from '../actions/types';


class App extends Component {

    onClick = async (id) => {
        await this.props.loadPage(UNLOAD_PAGE); 
        await this.props.searchProperties({ locality_id: id })
        await this.props.loadPage(); 
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
                              <Link to="#" className="footer"><i className="fa fa-facebook px-2 "></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-twitter px-2"></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-instagram px-2 "></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-google px-2 "></i></Link>
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
                                        <Link onClick={this.onClick.bind(this, 59)} to={`/properties/city/59`} className="footer">
                                            Lekki
                                        </Link>
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                        <Link onClick={this.onClick.bind(this, 19)} to={`/properties/city/19`} className="footer">
                                          Bannana Island
                                        </Link>
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                        <Link onClick={this.onClick.bind(this, 40)} to={`/properties/city/40`} className="footer">
                                            Ikeja
                                        </Link>                           
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-sm-6 ">
                                  <ul>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                        <Link onClick={this.onClick.bind(this, 46)} to={`/properties/city/46`} className="footer">
                                            Ikoyi
                                        </Link> 
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                        <Link onClick={this.onClick.bind(this, 60)} to={`/properties/city/60`} className="footer">
                                            Lekki Phase 1
                                        </Link> 
                                      </li>
                                      <li className="text-white py-2 " style={{fontSize:'1rem'}}>
                                        <Link onClick={this.onClick.bind(this, 91)} to={`/properties/city/91`} className="footer">
                                            Victorial Island
                                        </Link> 
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
      
    {/* //   <-- Create Alert Modal --> */}
      <div className="modal fade" id="createAlert" tabIndex="-1" role="dialog" aria-labelledby="createAlert" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-body">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                          </button>
                          <div className="py-5 px-5">
                              <h5 className="text-center">Create Alert</h5>
                              <h6 className="text-center">For Properties matching your current search</h6>
                              <form>
                                  <div className="form-group">
                                      <label htmlFor="name">Name</label>
                                      <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="exampleInputEmail1">Email</label>
                                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="duration">Duration</label>
                                      <select className="form-control"></select>
                                  </div>
                                  <button type="Create" className="btn bg-orange" style={{width:'100%'}}>Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
        </footer>
        )

    }

}

export default connect(null, { loadPage, searchProperties, })(App);