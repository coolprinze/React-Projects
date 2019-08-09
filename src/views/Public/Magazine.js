import React from 'react'
import { magazine, advert } from '../../assets/img';

const Magazine = () => {
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
        <div className="col-sm-4 TOUsearch">
          <div className="row">
            <div className="col-12 pt">
              <div className="bg-light ">
                  <p className="mb-0 p-2">Search castle</p>
              </div>
              <nav className="bg-orange">
                <div className="p-2">
                  <input type="text" className="form-control" placeholder="Search for agents using location or name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </nav>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-12">
              <button className=" mt-5 pt-2 pb-2 TOUbtn" type="button" name="button">View Properties for sale at Ikoyi</button>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-12">
              <button className=" mt-5 pt-2 pb-2 TOUbtn" type="button" name="button">View Properties for shortlist at Ikoyi</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="TOUadvert">
                <p className="mb-0 pt-2 pb-2 pl-2">Advert Placement</p>
                <div className="text-center pt-3 pb-3">
                    <img src={advert} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="TOUadvert">
                <p className="mb-0 pt-2 pb-2 pl-2">Advert Placement</p>
                <div className="text-center pt-3 pb-3">
                    <img src={advert} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Magazine; 