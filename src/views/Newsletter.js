import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'

class Newsletter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {

    return (
      <React.Fragment>
        <Header dashboard={true} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container" style={{ marginBlockStart: "1em" }}>
                <div className="row">
                  {/* <h6 className="textblack"> <a className="textblack"> <img src="images/Path(3).png" alt="" /> Send Newsletter </a>  </h6> */}
                  <button className="btn btn-dark ml-auto" type="button" name="button"> <Link to={"/subscribers"}>View subscribers</Link></button>
                </div>
              </div>
              <div className="container ">
                <div className="row ">
                  <div className="col colSN mx-auto" >
                    <div className="bg-white body" style={{ padding: "1em" }}>
                      <span style={{ textAlign: "left" }}>
                        <label htmlFor="">To who</label>
                        <input type="text" name="" value=""/>
                          <label htmlFor="">Subject</label>
                          <input type="text" name="" value=""/>
                            <label htmlFor="">Add Bonus</label>
                            <textarea name="name" rows="4" cols="65"></textarea>
                            <label htmlFor="">Comment</label>
                            <textarea name="name" rows="8" cols="65"></textarea>
            </span>
          </div>
        </div>
                      <div className="col colSN" >
                        <div className="bg-white body" style={{ padding: "1em" }}>
                          <div className="container" >
                            <div className="row">
                              <h6 className="textblack">Preview  </h6>
                              <button className="btn btn-dark ml-auto" type="button" name="button">Edit</button>
                            </div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <img src="images/SubscribersEmail.png" alt="" />
                          </div>
                          <div class="colSN" style={{ textAlign: "left" }}>
                            <label htmlfor="" >Send Test Email</label>
                            <span className="form-inline">
                              <input type="text" name="" value="" style={{ width: "60%" }} />
                              <button type="button " className="SNbtn" name="button" style={{ width: "30%", marginLeft: "1em" }}>Send test</button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container" style={{ marginBlockStart: "1em" }}>
                    <div class="row">
                      <div class="mx-auto">
                        <button type="button" name="button" className="SNbtn" style={{ paddingRight: "4em", paddingLeft: "4em", width: "100%" }}>Send </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Newsletter;