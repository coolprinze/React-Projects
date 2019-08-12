import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderSearch from './../../component/HeaderSearch'
import { property as img1, leftArrow, rightArrow } from '../../assets/img';
import { getProperty } from '../../actions';
import { Link } from 'react-router-dom';




class PropertyDetails extends Component {
    state = {
      property: []
    }

    constructor(props){
        super(props)
        this.slug = this.props.match.params.slug
        props.getProperty(this.slug);
    }


    render() {
      console.log(this.props.match.params.id);
      const { property } = this.props;
     
      return ( 
            <div>
              <HeaderSearch/>
              <div className="arrow mb-0"></div>
             
              <section className="py-5">
                  <div id="carousel">
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                      <div className="slide">
                          <img alt="" src={img1} />
                      </div>
                  </div>
                  <div>
                      <div className="d-flex justify-content-end py-4 px-5">
                          <img alt="" src={leftArrow} id="left-btn" className="px-1 pointer" alt=" "/>

                          <img alt="" src={rightArrow} id="right-btn" className="px-1 pointer" alt=" "/>
                      </div>
                  </div>
              </section>

              <section className="container-fluid mt-5 propertiesview " style={{background: '#FAFAFA'}}>
                  <div className="container py-3 ">
                      <div className="row ">
                          <div className="col-sm-8 col-lg-sm-8 badge-white ">
                              <div className="row ">
                                  <div className="col-sm-12 bg-white py-4 px-4 ">
                                      <div className="row ">
                                          <div className="col-sm-4 offset-sm-8 px-4 ">
                                              <p className="mb-0 text-right " style={{fontSize: '1rem'}}>{property.created_at}</p>
                                          </div>
                                      </div>

                                      <div className="row ">
                                          <div className="col-sm-3 px-0 ">
                                              <p className="mb-0 text-center py-2 " style={{fontSize: '1rem', borderBottom: '2px solid #FF8C00'}}>Description</p>
                                          </div>
                                          <div className="col-sm-3 px-0 ">
                                              <p className="mb-0 text-center py-2 " style={{fontSize: '1rem', borderBottom: '2px solid #F0F0F0'}}>Map</p>
                                          </div>
                                      </div>

                                      <div className="row py-3 ">
                                          <div className="col-sm-12 ">
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                 {property.description}
                                              </p>
                                          </div>
                                      </div>

                                      <div className="row py-3 ">
                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Refrence No </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.id}
                                              </p>
                                          </div>

                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Added on </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.created_at}
                                              </p>
                                          </div>

                                          <div className="col-sm-5 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Last Updated</p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  12 / 06 / 19
                                              </p>
                                          </div>
                                      </div>

                                      <div className="row py-3 ">
                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Market Status </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  Available
                                              </p>
                                          </div>

                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Type
                                              </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.type}
                                              </p>
                                          </div>

                                          <div className="col-sm-5 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Utilities
                                              </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  Available
                                              </p>
                                          </div>
                                      </div>

                                      <div className="row py-3 ">
                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Bedrooms
                                              </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.bedrooms}
                                              </p>
                                          </div>

                                          <div className="col-sm-3 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64',fontWeight: 'bold'}}>
                                                  Bathrooms
                                              </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.bathrooms}
                                              </p>
                                          </div>

                                          <div className="col-sm-5 ">
                                              <p className=" " style={{fontSize: '1.1rem', color:'#002E64', fontWeight: 'bold'}}>
                                                  Toilet
                                              </p>
                                              <p className=" " style={{fontSize: '1.1rem'}}>
                                                  {property.toilets}
                                              </p>
                                          </div>
                                      </div>

                                      <div className="row py-3 ">
                                          <div className="col-sm-8 offset-sm-2 ">
                                              <a className="btn btn-lg" href="contact.html" style={{background: '#FF8C00', width: '100%', color:'#FFFFFF'}}>Contact Via Mail</a>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>

                          <div className="col-sm-4 col-lg-4 pl-4 " style={{borderRadius:'5px'}}>
                              <div className="row ">
                                  <div className="col-sm-12 bg-white py-4 px-4 ">
                                      <div className="row ">
                                          <div className="col-sm-6 offset-sm-6 px-4 ">
                                              <p className="mb-0 text-right " style={{fontSize: '1rem', textDecoration: 'underline'}}>
                                                  <Link to="agent.html">View Listing</Link>
                                              </p>
                                          </div>
                                      </div>

                                      <div className="row ">
                                          <div className="col-sm-12 ">
                                              <p className="d-flex align-items-center justify-ceonten-center my-3 ">
                                                  <span style={{width: '40px',height: '40px',color: '#FE8C00',background: 'rgba(254, 140, 0, 0.1)',borderRadius: '100%', display: 'block'}} className="d-flex align-items-center justify-content-center mr-3 ">
                                                      <i className="fa fa-2x fa-user "></i>
                                                  </span>
                                                  <span style={{fontSize: '1.2rem'}}>{property.agent.name} </span>
                                              </p>

                                              <p className="d-flex align-items-center justify-ceonten-center my-3 ">
                                                  <span style={{width: '40px',height: '40px',color: '#FE8C00',background: 'rgba(254, 140, 0, 0.1)',borderRadius: '100%', display: 'block'}} className="d-flex align-items-center justify-content-center mr-3 ">
                                                          <i className="fa fa-2x fa-phone "></i>
                                                      </span>
                                                  <a style={{fontSize: '1.2rem'}} href={`tel:${property.agent.phone}`}>{property.agent.phone} </a>
                                              </p>

                                              <p className="d-flex align-items-center justify-ceonten-center my-3 ">
                                                  <span style={{width: '40px',height: '40px',color: '#FE8C00',background: 'rgba(254, 140, 0, 0.1)',borderRadius: '100%', display: 'block'}} className="d-flex align-items-center justify-content-center mr-3 ">
                                                              <i className="fa fa-2x fa-whatsapp "></i>
                                                          </span>
                                                  <a style={{fontSize: '1.2rem'}} href={`https://api.whatsapp.com/send?phone=${property.agent.phone}`}>{property.agent.phone} </a>
                                              </p>

                                              <p className="d-flex align-items-center justify-ceonten-center my-3 ">
                                                  <span style={{width: '40px',height: '40px',color: '#FE8C00',background: 'rgba(254, 140, 0, 0.1)',borderRadius: '100%', display: 'block'}} className="d-flex align-items-center justify-content-center mr-3 ">
                                                                  <i className="fa fa-2x fa-envelope-o "></i>
                                                              </span>
                                                  <a style={{fontSize: '1rem'}} href={`mailto:${property.agent.email}`}target="_top">{property.agent.email}</a>
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="row ">
                                  <div className="col-sm-12 py-3 px-0 ">
                                      <div className="card " height="18rem ">
                                          <div className="card-title py-3 " style={{borderBottom: '1px solid'}}>
                                              <i className="fa fa-share pl-2 "></i> Share this property listing
                                          </div>
                                          <div className="card-body ">
                                              <div>
                                                  <img alt="" src="../assets/img/icon/whatsapp.png " alt="" />
                                                  <img alt="" src="../assets/img/icon/twitter.png " alt="" />
                                                  <img alt="" src="../assets/img/icon/facebook.png " alt="" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>


                              <div className="row ">
                                  <div className="col-sm-12 py-3 px-0 ">
                                      <div className="card " height="18rem ">
                                          <div className="card-title py-3 " style={{borderBottom: '1px solid'}}>
                                              <i className="fa fa-share pl-2 "></i> Share this property listing
                                          </div>
                                          <div className="card-body ">
                                              <div>
                                                  <ul>
                                                      <li>
                                                          <a href="# " style={{textDecoration: 'underline !important', color: 'blue', fontSize: '0.65rem'}}>Average price for 1 bedroom flats for rent in Yaba </a>
                                                      </li>
                                                      <li>
                                                          <a href="# " style={{textDecoration: 'underline !important', color: 'blue', fontSize: '0.65rem'}}>Average price for 1 bedroom flats for rent in Yaba </a>
                                                      </li>
                                                  </ul>

                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>




                          </div>
                      </div>
                  </div>
              </section>  
          
            </div>
        )

    }

}

const mapStateToProp = state => ({
    property: state.properties.property
})

export default connect(mapStateToProp, {getProperty})(PropertyDetails);