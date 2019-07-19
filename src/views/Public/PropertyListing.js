import React, { Component } from 'react';
import HeaderSearch from './../../component/HeaderSearch'
import AdvanceSearch from './../../component/AdvanceSearch'
import Property from './../../component/Property'


class propertylisting extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
            <div>
              <HeaderSearch/>
              <div className="arrow mb-0"></div>

              <section className="container-fluid properties py-5" style={{background: '#FAFAFA'}}>
                  <div className="container py-3">
                    <div className="row">
                      <div className="col-sm-8 col-lg-sm-8">
                        <div className="row">
                          <div className="col-sm-12 bg-white py-2 my-3">
                              <h3>Location filter</h3>
                              <p className="pb-5" style={{fontSize: '1rem'}}>Ikate | Elegushi | Maruwa | Richmond | Efe | Jankande | Richmond | Efe | Jankande </p>
                          </div>
                        </div>
                        <Property/>
                      </div>
                      <div className="col-sm-4 col-lg-4 pl-4" style={{borderRadius:'5px'}}>
                          <AdvanceSearch/>
                      </div>
                    </div>
                  </div>
                </section>


              
          
            </div>
        )

    }

}

export default propertylisting;