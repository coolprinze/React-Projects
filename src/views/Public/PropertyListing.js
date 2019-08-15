import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import HeaderSearch from './../../component/HeaderSearch'
import AdvanceSearch from './../../component/AdvanceSearch'
import { getProperties, loadPage, getPaginatePage } from '../../actions';
import Paginate from '../../component/Paginate';
import PropertyView from '../../component/PropertyView';
import { GET_PROPERTIES } from '../../actions/types';

class PropertyListing extends Component {
    
    async componentDidMount(){
        if(this.props.properties.requestType === null){
            await this.props.getProperties()
        }
        await this.props.loadPage();
    }
    
    getPropertyDetails = (id) => {
        console.log(id)
    }
    render() {
        const { data, requestType } = this.props.properties
        const properties = data.length?
        data.map((item) =>{
            return (
                <PropertyView  key={item.id}  data={item} />
            )
        }): <div>{requestType === 'search'? "There are no listing for your search" :  'There are no listing yet'}</div>
      return ( 
            <div>
              <HeaderSearch prop={this.props} />
              <div>
                <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: '#FFFFFF', minHeight: '80px', borderBottom: '1px', solid: '#FFFFFF' }}>
        
                    <div className="container py-3" style={{ borderBottom: '1px', solid: '#000000' }}>
                        <div className="row">
                            <div className="col-sm-4">
                                Property for sale in Lekki, Nigeria
                            </div>
                            <div className="col-sm-2" data-toggle="modal" data-target="#createAlert">
                            <Link to="#" data-toggle="modal" data-target="#createAlert">
                            <i className="fa fa-bell pr-2"></i>Create Alert
                        </Link>
                            </div>
        
                            <div className="col-sm-3">
                                Can't find what you are looking for?
                            </div>
                            <div className="col-sm-3 pr-0">
                                <button className="btn btn-lg btn-outline-dark  pull-right">Post a Request</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: '#FFFFFF', height: '80px' }}>
                    <div className="container  d-flex align-items-center justify-content-between">
                        <h6>&nbsp;</h6>
                        <div className="dropdown">
                            <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Most Recent
                                    </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="#">Highest to Lowest</Link>
                                <Link className="dropdown-item" to="#">Lowest to Highest</Link>
                                {/* <Link className="dropdown-item" to="#">Something else here</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            

              </div>
              <div className="arrow mb-0"></div>

              <section className="container-fluid properties py-5" style={{background: '#FAFAFA'}}>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-sm-12 bg-white py-2 my-3">
                                        <h3>Location filter</h3>
                                        {/* <p className="pb-5" style={{fontSize: '1rem'}}>Ikate | Elegushi | Maruwa | Richmond | Efe | Jankande | Richmond | Efe | Jankande </p> */}
                                    </div>
                                    {properties}
                                </div>
                            </div>
                            <div className="col-lg-4 pl-lg-4" style={{borderRadius:'5px'}}>
                                <AdvanceSearch/>
                            </div>
                        </div>
                    </div>
                </section>
                <Paginate type={GET_PROPERTIES} onClick={this.props.getPaginatePage} data={this.props.properties} />             
          
            </div>
        )

    }

}

const mapStateToProps = state => ({
    properties: state.properties.listings,
    requestType: state.properties.requestType
})

export default connect(mapStateToProps, { getProperties, loadPage, getPaginatePage })(PropertyListing);