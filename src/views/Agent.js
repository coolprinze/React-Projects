
import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { useGlobal } from 'reactn'
import default_view from '../assets/img/propertyview/default_view.png'
import numeral from 'numeral';



const Agent = (props) => {
  const [properties] = useGlobal('properties');
  let id = props.props.match.params.id;
  let agentProperty = properties.filter(property => {
    if (property.agent.id == id) {
      return property;
    }
  })
  return (
    <React.Fragment>
      <Header />
      <Metrics active={["text", true, "text", "text", "text"]} />

      {agentProperty.length < 1 ?
        <div className="container">
          <div className="row" style={{ marginBlockEnd: "1em" }}>
            <div style={{ paddingLeft: "15px" }}>There is currently no property registered by this agent</div>
          </div></div> :
        <>
          <div className="container">
            <div className="row" style={{ marginBlockEnd: "1em" }}>
              <div className="col-12">
                <h4>{agentProperty[0].agent.name}</h4>
                <p><img src="images/Shape (1).png" alt="" /> Alagomeji ,Yaba, Lagos State</p>
                <span className="inlineDetails">
                  <p> <img src="images/Shape (2).png" alt="" /> 080-982-892-322 </p>
                  <p> <img src="images/Shape (2).png" alt="" /> 080-982-892-322</p>
                  {/* <button className="ml-auto" type="button" name="button">Upload property</button> */}
                </span>
              </div>
            </div>
          </div>
          {agentProperty.map(property => {
            return <div className="container" style={{ marginTop: "1em" }} key={property.id}>
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
                            {/* {property.pictures && property.pictures.length > 0 ? property.pictures.map(picture => { */}
                            {/* return <div className="carousel-item active"> */}
                            {/* <div className="images" style={{ padding: "0 0 0 0" }}> */}
                            {/* <span style={{ display: "flex" }}> */}

                            {/* <img src={picture} alt="house pictures" /> */}
                            {/* </span> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* }) : */}
                            <div className="carousel-item">
                              <div className="images" style={{ padding: "0 0 0 0" }}>
                                <span style={{ display: "flex" }}>
                                  <img src={default_view} alt="house pictures" />
                                  <img src={default_view} alt="house pictures" />
                                </span>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="images" style={{ padding: "0 0 0 0" }}>
                                <span style={{ display: "flex" }}>
                                  <img src={default_view} alt="house pictures" />
                                  <img src={default_view} alt="house pictures" />
                                </span>
                              </div>
                            </div><div className="carousel-item">
                              <div className="images" style={{ padding: "0 0 0 0" }}>
                                <span style={{ display: "flex" }}>
                                  <img src={default_view} alt="house pictures" />
                                  <img src={default_view} alt="house pictures" />
                                </span>
                              </div>
                            </div><div className="carousel-item">
                              <div className="images" style={{ padding: "0 0 0 0" }}>
                                <span style={{ display: "flex" }}>
                                  <img src={default_view} alt="house pictures" />
                                  <img src={default_view} alt="house pictures" />
                                </span>
                              </div>
                            </div>
                            
                            {/* } */}
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
                          <h4>{property.slug.replace(/-/g, " ")}</h4>
                          <p style={{ fontSize: "small" }}>{property.bedrooms || 0} bedrooms | {property.bathrooms || 0} bathrooms | {property.toilets || 0} toilets | {property.parking || 0} parkings</p>
                          <h5>{property.locality}</h5>
                          <p style={{ fontSize: "small" }}> {property.description}</p>
                          <div className="mycard2">
                            <h3>N {numeral(property.price).format('0,0')}</h3>
                            <p style={{ fontSize: "x-small" }}>Added {property.created_at}</p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
        </>}
      {/* <div className="container" style={{ marginTop: "1em" }}>
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
                              <span style={{ display: "flex" }}>
                                <img src="images/Rectangle (1).png" alt="house pictures" />
                                <img src="images/Rectangle.png" alt="house pictures" />
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
                              <span style={{ display: "flex" }}>
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
          </div>  */}
      {/* </div>  */}
      {/* </div> */}
      <Footer />
    </React.Fragment>
  )
}

export default Agent;