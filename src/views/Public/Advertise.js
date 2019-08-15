import React, { Component, Fragment } from 'react'
import Newsletter from '../../component/Newsletter';
import { ad1, ad2 } from '../../assets/img';
import { connect } from 'react-redux'
import { loadPage } from '../../actions';


class Advertise extends Component{

  async componentDidMount(){
    await this.props.loadPage();
  }

  render(){
    return (
      <Fragment>
        <header>
          <div className="text-center headerContent">
            <h1 className="text-white">Advertise in our Magazine</h1>
          </div>
        </header>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 TOUinfo">
              <h1>Registration Requirement and advert rate for Castles Magazine & Highbrow </h1>
              <p>
                Thank you for your interest in CASTLES Lifestyle Magazine. For your company to start advertising in the Magazine, you are required to register with us.
              </p>
              <p>Registration Requirements are: </p>
              <p>1. Letter of Intention the company’s letter head paper</p>
              <p> 2. Certificate of Incorporation </p>
              <p>3. Cheque Leaf (cheque should be made void by crossing it)</p>
              <p>4. Passport Photograph</p>
              <p>5. Utility Bill of the company’s premises</p>
              <p>6. Any of the following means of identification a. Driver’s License b. International Passport c. National Identity Card </p>
              <p>Please bear with us as these requirements are stipulated by the EFCC and Police to safeguard customers.Submission of Adverts: </p>
              <p>Adverts can be submitted in person to our office at Plot 285A Corporation Drive, Dolphin Estate, Ikoyi.By e-mail: send advert materials and proof of payment (scanned copy of teller) to adverts@castlesweekly.com with a copy to castlesmag@yahoo.com. </p>
              <p>Submission Dates:</p>
              <p>Colored adverts – Mondays to Wednesdays</p>
              <p>Black & White advert- Mondays to Thursdays </p>
              <p>Our bank detail: Diamond Bank Plc. </p>
              <p>Account Name: Realhouse Communications</p>
              <p>Limited Account Number: 0025235581 </p>
              <p>Advert Bonus: Your advert enjoys two weeks complementary placement on our website www.castles.com.ng </p>
              <p>Upon registration, you will get directives on how to get this done. </p>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 TOUinfo">
              <h1>Magazines</h1>
            </div>
            <div className="row magIMG">
              <div className="col-6">
                <img src={ad1} alt="" />
              </div>
              <div className="col-6 magIMG" id="img2">
                <img  src={ad2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Newsletter />      
      </Fragment>
    )
  }
}

export default connect(null, {loadPage})(Advertise); 