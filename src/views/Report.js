import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: "1"
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", "text", "text", "text", true]} />
        <div class="container" style={{backgroundColor: "#f8f9fa"}}>
          <div class="row">
            <div class="col-12">
            <MDBContainer>
              <MDBNav className="nav-tabs mt-5"
              
              >
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                    Home
            </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                    Profile
            </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                    Profile
            </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItem}  >
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
            </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
            </p>
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
            </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
            </p>
                </MDBTabPane>
              </MDBTabContent>
              </MDBContainer>
            </div></div></div>
        {/* <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
                <p class="navbar-brand myp"> All Reports</p>
                <div class="" >
                  <span class="form-inline">
                    <button class="btn btn-light active0" type="button" name="button">Escalate</button>
                    <button class="btn btn-light SNbtn" type="button" name="button">Resolve</button>
                  </span>
                </div>
              </nav>
            </div>
            <div class="" style={{ marginBlockEnd: "1em", width: "100%" }}>
              <div class="col-12">
                <div class="bg-white" style={{ padding: "1em", borderRadius: "0 0 4px 4px" }}>
                  <div class="profileNav">
                    <ul class="list-group" id="list-tab" role="tablist">
                      <li> <a class=" list-group-item-action active" id="list-property-list" data-toggle="list" href="#list-property" role="tab" aria-controls="property">Property</a></li>
                      <li> <a class="list-group-item-action" id="list-sender-list" data-toggle="list" href="#list-sender" role="tab" aria-controls="sender">Sender</a></li>
                      <li> <a class="list-group-item-action" id="list-query-list" data-toggle="list" href="#list-query" role="tab" aria-controls="query">Query/Enquiry</a></li>
                    </ul>
                  </div>
                  <div class="tab-content" id="nav-tabContent">
                    <div class="profileInfo tab-pane fade show active" id="list-property" role="tabpanel" aria-labelledby="list-property-list">
                      <label>Property</label>
                      <p>2 Bedroom flat</p>
                      <label for="">Location</label>
                      <p>Ikoyi,Lagos</p>
                      <label for="">Agent</label>
                      <p>Adrbiyi Adegbayigbi</p>
                      <label for="">Agent's Phone Number</label>
                      <p>08176770833</p>
                      <label for="">Agent's Email</label>
                      <p>Adegbayigbi @ yahoo.com</p>
                      <button type="button" class="btn-outline-dark bg-light" name="button">View Property</button>
                    </div>
                    <div class="profileInfo tab-pane fade" id="list-sender" role="tabpanel" aria-labelledby="list-sender-list">
                    </div>
                    <div class="profileInfo tab-pane fade" id="list-query" role="tabpanel" aria-labelledby="list-query-list">.++.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Report;