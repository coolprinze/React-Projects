import React, { Component } from 'react';

class Footer extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
            <div className="footer">
            <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img src="images/logo-01-copy.png" alt=""  />
                <div>
                <span className="foot">
                  <img src="images/Path(1).png" alt=""/>
                  <img src="images/Behance.png" alt=""/>
                  <img src="images/Path.png" alt=""/>
                  <img src="images/Shape.png" alt=""/>
                  <img src="images/Skype.jpg" alt=""/>
                </span>
              </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h5>Get in Touch</h5>
                <p> <img src="images/Shape(1).png" alt=""/> 285A Corporation Drive, Dolphin Estate, Ikoyi, Lagos</p>
                <p> <img src="images/Shape(2).png" alt=""/> 080-982-892-322</p>
                <p> <img src="images/Shape(3).png" alt=""/> agentListing@gmail.com</p>
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
                  <hr className="line"/>
                  <p>© 2018 Castles by RealHouse Communications Limited.</p>
                </div>
              </div>
            </div>
          </div>
        )

    }

}

export default Footer;