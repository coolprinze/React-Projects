import React from 'react'
import SearchBar from './SearchBar';
import { agent } from '../assets/img';

const SideBar = () => {
  return (
    <div className="col-md-4 ">
        <div className="row ">
            <div className="col-sm-12 pb-3 ">
                <div className="card ml-md-5 " height="18rem ">
                    <h5 className=" px-3 py-3 ">
                        Search Castles
                    </h5>
                    <div className="card-footer " style={{ background: '#FF8C00' }}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>

        <div className="row ">
            <div className="col-sm-12 py-3 ">
                <div className="card ml-md-5 " height="18rem ">
                    <img src={agent} height="227px " className="card-img-top " alt="... " style={{ height: '227px' }} />
                    <div className="card-footer btn btn-outline-dark " style={{ background: '#FF8C00'}}>
                        View properties for sale at Ikoyi
                    </div>
                </div>
            </div>

        </div>

        <div className="row ">
            <div className="col-sm-12 py-3 ">
                <div className="card ml-md-5 " height="18rem ">
                    <img src={agent} height="227px " className="card-img-top " alt="... " style={{  height: '227px'}} />
                    <div className="card-footer btn btn-outline-dark " style={{ background: '#FF8C00'}}>
                        View properties for sale at Ikoyi
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SideBar