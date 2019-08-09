import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer';
import building from './icons/building.png'
import stat from './icons/stat.png'
import user from './icons/user.png'
import add from './icons/add.png'
import network from './icons/network.png'
import edit from './icons/edit.png'




class Dashboard extends Component {

    render() {

        return ( 
          <React.Fragment>
            <Header />
            <div className="container-fluid search-bar d-flex align-items-center">
              <div className="container d-flex justify-content-between align-items-center">
                  <div className="col-sm-12">
                      <div className="row">
                          <div className="col-sm-12 py-3 px-0">
                            <h4 className="text-white">Dashboard</h4>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <section className="container-fluid bg-grey">
              <div className="container py-5">
                  <div className="row">
                      <div className="col-sm-4 px-4">
                          <div className="card text-center py-4 px-4  bg-white grey-border d-flex align-items-center" style={{minHeight:"241px"}} >
                              <Link to="/agent/agent-listing">
                                <img src={building} className="img-fluid " alt=""/>
                                <p className="pt-4 ">My Listings</p>
                              <span className="py-2 ">View, add, edit and delete from listings</span>
                              </Link>
                          </div>
                      </div>
                      <div className="col-sm-4 px-4 ">
                          <Link to="/agent/listing-statistics">
                          <div className="card text-center py-4 px-4 bg-white grey-border d-flex align-items-center " style={{minHeight:"241px"}}>
                              <img src={stat} className="img-fluid " alt=" "/>
                              <p className="pt-4 ">Listings Statistics</p>
                              <span className="py-2 ">Reports on views and activities on your listings</span>
                          </div>
                          </Link>
                      </div>

                      <div className="col-sm-4 px-4 ">
                          <Link to="/agent/profile">
                          <div className="card text-center py-4 px-4 bg-white grey-border d-flex align-items-center " style={{minHeight:"241px"}}>
                                  <img src={user} className="img-fluid " alt=" "/>
                                  <p className="pt-4 ">My Profile</p>
                                  <span className="py-2 ">Phone numbers, address and company details </span>
                              </div>
                          </Link>
                      </div>
                  </div>

                  <div className="row bg-white px-3 py-5 mx-2 mt-5 border-bb ">
                    <div className="col-sm-2 ">
                        <h5>Affilliations</h5>
                    </div>
                    <div className="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div className="col-sm-1 bg-grey py-4 px-4 d-flex align-items-center ">
                        <img src={network} alt=" "/>
                    </div>
                    <div className="col-sm-4 ">
                        <p className="y-1 ">Maxmadison Corperation</p>
                        <p>Brand Member</p>
                        <span></span>Since Jan,2019
                    </div>
    
                    <div className="col-sm-1 offset-sm-6 py-3 ">
                        <img src={edit} alt=" "/>
                    </div>
    
                </div>
    
                <div className="row bg-white px-3 py-5 mx-2 my-0 border-bb ">
                    <div className="col-sm-2 ">
                        <h5>Accreditations</h5>
                    </div>
                    <div className="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div className="col-sm-1 bg-grey py-4 px-4 d-flex align-items-center ">
                        <img src={network} alt=" "/>
                    </div>
                    <div className="col-sm-4 ">
                        <p className="y-1 ">Full Agent</p>
                        <p>IATA</p>
                        <span></span>Issued Jan,2019
                    </div>
                    <div className="col-sm-1 offset-sm-6 py-3 ">
                        <img src={edit} alt=" "/>
                    </div>
                </div>
                <div className="row bg-white px-3 py-5 mx-2 my-0s ">
                    <div className="col-sm-2 ">
                        <h5>Certifications</h5>
                    </div>
                    <div className="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div className="col-sm-4 ">
                        <p className="y-1 ">Number of closed deals: 32</p>
                    </div>
                </div>
              </div>
            </section>
            <Footer />
          </React.Fragment>
        )
    }

}

export default Dashboard;