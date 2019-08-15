import React, { Component } from 'react'
import { magazine, advert } from '../../assets/img';
import { connect } from 'react-redux'
import { loadPage } from '../../actions';
import SideBar from '../../component/SideBar';
import Newsletter from '../../component/Newsletter';


class Magazine extends Component{

  async componentDidMount(){
    await this.props.loadPage();
  }

  render(){

    return (
      <div>
        
      <header>
        <div className="text-center headerContent">
          <h1>Download Past Editions of Castles Lifestyle</h1>
        </div>
      </header>
      <div className="container magazine pt-5 pb-5">
        <div className="row">
          <div className="col-sm-8 TOUinfo">
            <h1>Magazines</h1>
            <div className="DMimages">
              <div className="row mt-4 mb-4">
                <div className="col-6  text-center">
                  <button className="pt-4 pb-4 pr-4 pl-4"type="button" name="button"><img src={magazine} alt="" /></button>
                </div>
                <div className="col-6  text-center">
                  <button className="pt-4 pb-4 pr-4 pl-4" type="button" name="button">
                      <img src={magazine} alt="" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          <SideBar />
        </div>
      </div>
      <Newsletter />
        
      </div>
    )
  }
}

export default connect(null, {loadPage})(Magazine); 