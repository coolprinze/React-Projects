import React, { Component } from 'react';
import { connect } from "react-redux"
import HeaderSearch from './../../component/HeaderSearch'
import AdvanceSearch from './../../component/AdvanceSearch'
import { getProperties } from '../../actions';
import Paginate from '../../component/Paginate';
import PropertyView from '../../component/PropertyView';

class PropertyListing extends Component {
    constructor(props){
        super(props)
        this.props.getProperties()
    }
    
    getPropertyDetails = (id) => {
        console.log(id)
    }
    render() {
        const { data, requestType } = this.props.properties
        const properties = data.length?
        data.map((item) =>{
            return (
                <PropertyView  key={item.id}  data={item} onDelete={this.deleteListing.bind(this, item.id)} />
            )
        }): <div>{requestType === 'search'? "There are no listing for your search" :  'There are no listing yet'}</div>
      return ( 
            <div>
              <HeaderSearch/>
              <div className="arrow mb-0"></div>

              <section className="container-fluid properties py-5" style={{background: '#FAFAFA'}}>
                    <div className="container py-3">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-12 bg-white py-2 my-3">
                                <h3>Location filter</h3>
                                <p className="pb-5" style={{fontSize: '1rem'}}>Ikate | Elegushi | Maruwa | Richmond | Efe | Jankande | Richmond | Efe | Jankande </p>
                            </div>
                        </div>
                        {properties}
                        </div>
                        <div className="col-md-4 pl-4" style={{borderRadius:'5px'}}>
                            <AdvanceSearch/>
                        </div>
                    </div>
                    </div>
                </section>
                <Paginate data={this.props.properties} />             
          
            </div>
        )

    }

}

const mapStateToProps = state => ({
    properties: state.properties.listings,
    requestType: state.properties.requestType
})

export default connect(mapStateToProps, { getProperties })(PropertyListing);