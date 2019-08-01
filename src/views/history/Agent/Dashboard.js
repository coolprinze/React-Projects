import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer';
import building from './icons/building.png'
import stat from './icons/stat.png'
import user from './icons/user.png'
import add from './icons/add.png'
import network from './icons/network.png'
import edit from './icons/edit.png'




class Dashboard extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
          <React.Fragment>
            <Header />
            <div class="container-fluid search-bar d-flex align-items-center">
              <div class="container d-flex justify-content-between align-items-center">
                  <div class="col-sm-12">
                      <div class="row">
                          <div class="col-sm-12 py-3 px-0">
                            <h4 class="text-white">Dashboard</h4>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <section class="container-fluid bg-grey">
              <div class="container py-5">
                  <div class="row">
                      <div class="col-sm-4 px-4">
                          <div class="card text-center py-4 px-4  bg-white grey-border d-flex align-items-center" style={{minHeight:"241px"}} >
                              <a href="mylisting "/><img src={building} class="img-fluid " alt=""/>
                              <p class="pt-4 "> <a href="# ">My Listings</a></p>
                              <span class="py-2 ">View, add, edit and delete from listings</span>
                          </div>
                      </div>
                      <div class="col-sm-4 px-4 ">
                          <a href="liststat.html ">
                          <div class="card text-center py-4 px-4 bg-white grey-border d-flex align-items-center " style={{minHeight:"241px"}}>
                              <img src={stat} class="img-fluid " alt=" "/>
                              <p class="pt-4 ">Listings Statistics</p>
                              <span class="py-2 ">Reports on views and activities on your listings</span>
                          </div>
                          </a>
                      </div>

                      <div class="col-sm-4 px-4 ">
                          <a href="profile.html ">
                          <div class="card text-center py-4 px-4 bg-white grey-border d-flex align-items-center " style={{minHeight:"241px"}}>
                                  <img src={user} class="img-fluid " alt=" "/>
                                  <p class="pt-4 ">My Profile</p>
                                  <span class="py-2 ">Phone numbers, address and company details </span>
                              </div>
                          </a>
                      </div>
                  </div>

                  <div class="row bg-white px-3 py-5 mx-2 mt-5 border-bb ">
                    <div class="col-sm-2 ">
                        <h5>Affilliations</h5>
                    </div>
                    <div class="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div class="col-sm-1 bg-grey py-4 px-4 d-flex align-items-center ">
                        <img src={network} alt=" "/>
                    </div>
                    <div class="col-sm-4 ">
                        <p class="y-1 ">Maxmadison Corperation</p>
                        <p>Brand Member</p>
                        <span></span>Since Jan,2019
                    </div>
    
                    <div class="col-sm-1 offset-sm-6 py-3 ">
                        <img src={edit} alt=" "/>
                    </div>
    
                </div>
    
                <div class="row bg-white px-3 py-5 mx-2 my-0 border-bb ">
                    <div class="col-sm-2 ">
                        <h5>Accreditations</h5>
                    </div>
                    <div class="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div class="col-sm-1 bg-grey py-4 px-4 d-flex align-items-center ">
                        <img src={network} alt=" "/>
                    </div>
                    <div class="col-sm-4 ">
                        <p class="y-1 ">Full Agent</p>
                        <p>IATA</p>
                        <span></span>Issued Jan,2019
                    </div>
                    <div class="col-sm-1 offset-sm-6 py-3 ">
                        <img src={edit} alt=" "/>
                    </div>
                </div>
                <div class="row bg-white px-3 py-5 mx-2 my-0s ">
                    <div class="col-sm-2 ">
                        <h5>Certifications</h5>
                    </div>
                    <div class="col-sm-1 offset-sm-9 d-flex align-items-center ">
                        <img src={add} alt=" "/>
                    </div>
                    <div class="col-sm-4 ">
                        <p class="y-1 ">Number of closed deals: 32</p>
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