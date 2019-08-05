import React, { Component } from 'react';
import Shape from '../assets/img/Shape.png'
import Shape01 from '../assets/img/Shape(1).png'
import Shape02 from '../assets/img/Shape(2).png'
import Shape03 from '../assets/img/Shape(3).png'
import path from '../assets/img/Path(1).png'
import Behance from '../assets/img/Behance.png'
import path_ from '../assets/img/Path.png'
import skype from '../assets/img/Skype.jpg'
import logo_01_copy from '../assets/img/logo-01-copy.png'

class Footer extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img src={logo_01_copy} alt="" />
              <div>
                <span className="foot">
                  <img src={path} alt="" />
                  <img src={Behance} alt="" />
                  <img src={path_} alt="" />
                  <img src={Shape} alt="" />
                  <img src={skype} alt="" />
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5>Get in Touch</h5>
              <p> <img src={Shape01} alt="" /> 285A Corporation Drive, Dolphin Estate, Ikoyi, Lagos</p>
              <p> <img src={Shape02} alt="" /> 080-982-892-322</p>
              <p> <img src={Shape03} alt="" /> agentListing@gmail.com</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <h5>Property Cities</h5>
              <div className="row lists">
                <div className="col-sm-6">
                  <p>Ikoyi</p>
                  <p>Ikeja</p>
                  <p>Eko</p>
                </div>
                <div className="col-sm-6">
                  <p>Victoria Island</p>
                  <p>Egba</p>
                  <p>Hawaii</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr className="line" />
              <p>© 2018 Castles by RealHouse Communications Limited.</p>
            </div>
          </div>
        </div>
      </div>
    )

  }

}

export default Footer;