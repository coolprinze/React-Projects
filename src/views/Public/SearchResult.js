import React, { Component } from 'react';
import HeaderSearch from './../../component/HeaderSearch'
import AdvanceSearch from './../../component/AdvanceSearch'

class SearchResult extends Component {
    constructor(props){
      super(props)
      this.state = {
        properties:[]
      }
    }
    componentDidMount() {
    }
    
    render() {
      var savedProperties = this.state.properties.map((item)=> {
        return <div className="row px-3 py-3 bg-white" key={item.id}>
            <div className="col-sm-8">
                <div className="row">
                    <div className="col-sm-8 col-lg-8 px-0 py-0">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="col-sm-4 col-lg-4 px-0 py-0">
                        <img src={item.image} alt=""/>
                        <img src={item.image} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 px-0 py-0 border-bottum">
                <div className="col-sm-12 py-2 px-2">
                    <h5>{item.title}</h5>
                    {/* <span className="text-small"> 4 Bedroom | 3 Bathroom | 4 Toilet | 2 Parking</span> */}
                    <h6 className="px-0 py-0">Ajah</h6>
                    <span>
                        {item.description}
                    </span>
                    <button className="btn btn-dark btn-listing">N {item.price}</button>
                    <div className="row py-1">
                        <div className="col-sm-8 col-lg-8">
                            <span>{item.created_at}</span>
                        </div>
                        <div className="col-sm-2 col-lg-2">
                            <i className="fa fa-share"></i>
                        </div>
                        <div className="col-sm-2 col-lg-2">
                            <i className="fa fa-heart-o"></i>
                        </div>
                    </div>
                    <hr className="mx-0 py-0 my-0"/>
                    <div className="row">
                        <div className="col-sm-3"><img src={item.image} className="img rounded-circle" alt=""/></div>
                        <div className="col-sm-9">
                            <span>{item.agent.name}</span>
                            <div className="d-flex justify-content-between">
                                <span>{item.agent.phone}</span>
                                <span>View listing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })
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
                        {savedProperties.length < 1 ? "No properties match your search": savedProperties}
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

export default SearchResult;