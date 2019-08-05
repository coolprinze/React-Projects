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
        <nav className="container navbar bg-dark" style={{ borderRadius: "4px 4px 0px 0px" }}>
          <p className="navbar-brand myp">Report Details</p>
          <div className="" >
            <span className="form-inline">
              <button className="btn btn-light active0" type="button" name="button">Escalate</button>
              <button className="btn btn-light SNbtn" type="button" name="button">Resolve</button>
            </span>
          </div>
        </nav>
        <div className="container" style={{ backgroundColor: "#f8f9fa", marginBottom: "40px" }}>
          <div className="row">
            <div className="col-12">
              <MDBContainer>
                <MDBNav className="nav-tabs mt-5">
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                      Property
            </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                      Sender
            </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                      Query/Enquiry
            </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem}  >
                  <MDBTabPane tabId="1" role="tabpanel">
                    <div className="profileInfo tab-pane fade show active" id="list-property" role="tabpanel" aria-labelledby="list-property-list">
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
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <div className="profileInfo tab-pane fade show active" id="list-property" role="tabpanel" aria-labelledby="list-property-list">
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
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <div className="profileInfo tab-pane fade show active" id="list-property" role="tabpanel" aria-labelledby="list-property-list">
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
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Report;