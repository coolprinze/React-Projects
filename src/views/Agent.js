
import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'

class Agent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Metrics active={["text", true, "text", "text", "text"]} />
        <div className="container">
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div className="col-12">
              <h4>Elias Developer Homes</h4>
              <p><img src="images/Shape (1).png" alt="" /> Alagomeji ,Yaba, Lagos State</p>
              <span className="inlineDetails">
                <p> <img src="images/Shape (2).png" alt="" /> 080-982-892-322 </p>
                <p> <img src="images/Shape (2).png" alt="" /> 080-982-892-322</p>
                <button className="ml-auto" type="button" name="button">Upload property</button>
              </span>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "1em" }}>
          <div className="row">
            <div className="col-12">
              <div className=" card mycard ">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block">
                          <img src="images/Group 45.png" alt="" />
                        </div>
                        <div className="carousel-item active">

                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                              <img src="images/Rectangle.png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                              <img src="images/Rectangle.png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="price">
                      <h4>2 Bedroom flat</h4>
                      <p style={{ fontSize: "small" }}>2 bedroom | 2 bathroom | 2 toilets | 1 parking</p>
                      <h5>Ikoyi</h5>
                      <p style={{ fontSize: "small" }}>  A newly renovated 2 bedroom flat in the heart of lagos, one way drive tolekki and to the mainland</p>
                      <div className="mycard2">
                        <h3>N 180,000</h3>
                        <p style={{ fontSize: "x-small" }}>Added 2 days ago</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "1em" }}>
          <div className="row">
            <div className="col-12">
              <div className=" card mycard ">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block">
                          <img src="images/Group 45.png" alt="" />
                        </div>
                        <div className="carousel-item active">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                              <img src="images/Rectangle.png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                              <img src="images/Rectangle.png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{ display: "flex" }}>

                            </span>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="price">
                      <h4>2 Bedroom flat</h4>
                      <p style={{fontSize: "small"}}>2 bedroom | 2 bathroom | 2 toilets | 1 parking</p>
                      <h5>Ikoyi</h5>
                      <p style={{fontSize: "small"}}>  bldsjsjkfbsdjfhsdklfhsdbfmsnfjkhflfldblscscbnnw</p>
                      <div className="mycard2">
                        <h3>N 180,000</h3>
                        <p style={{fontSize:"x-small"}}>Added 2 days ago</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "1em" }}>
          <div className="row">
            <div className="col-12">
              <div className=" card mycard ">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block">
                          <img src="images/Group 45.png" alt="" />
                        </div>
                        <div className="carousel-item active">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{display: "flex"}}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                            </span>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="images" style={{ padding: "0 0 0 0" }}>
                            <span style={{ display: "flex" }}>
                              <img src="images/Rectangle (1).png" alt="house pictures" />
                              <img src="images/Rectangle.png" alt="house pictures" />
                            </span>
                          </div>
                        </div>

                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="price">
                      <h4>2 Bedroom flat</h4>
                      <p style={{ fontSize: "small" }}>2 bedroom | 2 bathroom | 2 toilets | 1 parking</p>
                      <h5>Ikoyi</h5>
                      <p style={{ fontSize: "small" }}>  bldsjsjkfbsdjfhsdklfhsdbfmsnfjkhflfldblscscbnnw</p>
                      <div className="mycard2">
                        <h3>N 180,000</h3>
                        <p style={{ fontSize: "x-small" }}>Added 2 days ago</p>
                        <hr />
                      </div>
                    </div>
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

export default Agent;