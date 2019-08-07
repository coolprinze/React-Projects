import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { abtUsContent } from '../../assets/img';
import Contact from '../../component/Contact';

class About extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid mt-5 propertiesview">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4 className="py-3" style={{ fontSize: '32px', lineHeight: '48px' }}>Castles Nigeria’s trusted property source</h4>
                        <p style={{ fontSize: '20px', lineHeight: '36px' }}>Castles.com.ng is the online representation of Castles Lifestyle and Highbrow Living magazines, both published by Realhouse Communications Limited. Properties listed here are placed as adverts in these magazines and the articles are
                            adapted for the web from articles published in the magazines.</p>
                    </div>
                </div>
            </div>
        </section>
  
  
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-6 pt-1 pb-3 abtUs">
                    <h4 className="py-3" style={{ fontSize: '32px', lineHeight: '48px' }}>Castles Lifestyle</h4>
                    <p style={{ fontSize: '20px', lineHeight: '36px' }}>is Nigeria’s premier property magazine and has been published weekly since October 1999. It has become the trusted source for real estate advice and properties for sale and let, in Lagos, Abuja, Port Harcourt and other major commercial
                        centres in Nigeria.</p>
                </div>
                <div className="col-6 pt-2 text-center ">
                  <img className=" abtImage " src={abtUsContent} alt="" />
                </div>
            </div>
        </div>
      <div className="container mt-4 mb-4">
          <div className="row">
              <div className="col-6 pt-2 text-center">
                  <img className=" abtImage " src={abtUsContent} alt="" />
              </div>
              <div className="col-6 pt-1 pb-3 abtUs">
                  <h4 className="py-3" style={{ fontSize: '32px', lineHeight: '48px' }}>Highbrow Living</h4>
                  <p style={{ fontSize: '20px', lineHeight: '36px' }}>is an upscale glossy magazine focusing on the high-end segment of the real estate market in Nigeria. Every month, it readers discover the exotic houses, apartments and plots of land for sale and lease in locations like Ikoyi in Lagos and
                      Asokoro in Abuja.</p>
              </div>
          </div>
      </div>
      <section className="container-fluid mt-5 propertiesview bg-grey py-5">
          <div className="container mt-4 mb-4">
              <div className="row">
                  <div className="col-6 pt-4 pb-4 abtContact">
                      <h1 className="py-3">Contact our Team</h1>
                      <h6 className="py-3" style={{ fontSize: '18px', lineHeight: '36px' }}>Need Help?, Reach out to us. We’ve got answers to your questions.</h6>
                      <ul>
                          <li className="py-2 " style={{ fontSize: '1rem'}}>
                              <span className="fa fa-map-marker pr-3 footer "></span> 285A Corporation Drive, Dolphin Estate, Ikoyi, Lagos
                          </li>
                          <li className="py-2 " style={{ fontSize: '1rem'}}>
                              <span className="fa fa-phone pr-3 footer "></span> 080-3473-9837
                          </li>
                          <li className="py-2 " style={{ fontSize: '0.9rem' }}>
                              <span className="fa fa-envelope pr-3 footer "></span> adverts@castlesweekly.com, enquiries@castles.com.ng
                          </li>
                          <li className="pt-5" style={{ fontSize: '1rem'}}>
                              Follow Us
                          </li>
                          <div className="text-white py-2">
                              <Link to="#" className="footer"><i className="fa fa-facebook px-2 "></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-twitter px-2"></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-instagram px-2 "></i></Link>
                              <Link to="#" className="footer"><i className="fa fa-google px-2 "></i></Link>
                          </div>
                      </ul>
                  </div>
                  <Contact />
              </div>
          </div>
      </section>
  
      <section className="section-padding footer mt-5">
          <div className="container ">
              <h3 className="mb-4 text-center text-uppercase">To get latest update subscribe to our </h3>
              <h5 className="text-center text-muted pb-5 text-uppercase">newsletter</h5>
              <div className="row ">
                  <div className="col-lg-6 col-md-6 offset-sm-3 ">
                      <div className="row">
                          <div className="col-sm-9 px-0">
                              <input type="text" name="newsletter" className="form-control py-3" id="newsletter" style={{ background: 'rgb(32, 32, 54)',  height: '80px', color: '#ffffff', fontSize: '1.5rem' }} placeholder="EMAIL ADDRESS" />
                          </div>
                          <div className="col-sm-3 px-0 py-2 align-middle">
                              <button className="btn btn-lg bg-orange btn-subscribe">Subscribe</button>
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

export default About;
