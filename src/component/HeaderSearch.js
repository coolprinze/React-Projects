import React, { Component } from 'react';
import NumberFormat from 'react-number-format'
import SearchBar from './SearchBar';
import { PRICES } from './Variable';
import { connect } from 'react-redux'
import { getPropertyTypes, searchProperties } from '../actions';
import { UPDATE_SEARCH_PARAM, UPDATE_SEARCH_TERM } from '../actions/types';


class HeaderSearch extends Component {
    constructor(props) {  
        super(props);      
        this.props.getPropertyTypes()
    }

    
    updateSearch = e => {
        this.props.updateSearchParams({ [e.target.id]: e.target.value })
        this.props.searchProperties({...this.props.searchedParam, [e.target.id]: e.target.value})
    } 

    render() {

        const { types } = this.props

        const prices = PRICES().map(price => <NumberFormat key={price} value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <option value={price}>{value}</option>} />
        )
        return ( 
            <header>
                <div className="container-fluid search-bar d-flex align-items-center flex-xl-row">
                    <section className="container py-2">
                        <ul className="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                            <li className="col-lg-3 d-flex flex-column justify-content-center align-items-center px-0  text-center">
                                <SearchBar />

                            </li>
                            {/* <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select onChange={this.updateSearch} name="location_id" className="form-control px-2" id="location_id">
                                    <option  value="" defaultValue>LOCATION</option>
                                </select>
                            </li> */}
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select onChange={this.updateSearch} name="min_price" className="form-control px-2" id="min_price">
                                    <option  value="" defaultValue>MIN PRICE</option>
                                    {prices}
                                </select>
                            </li>
        
                            <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center text-white">
                                <div className="text-white px-0 pb-3">to</div>
                            </li>
        
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select onChange={this.updateSearch} name="max_price" className="form-control px-2" id="max_price">
                                    <option  value="" defaultValue>MAX PRICE</option>
                                    {prices}
                                </select>
                            </li>
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select onChange={this.updateSearch} name="type_id" className="form-control px-2" id="type_id">
                                    <option  value="" defaultValue>PROPERTY TYPE</option>
                                    {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                </select>
                            </li>
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select onChange={this.updateSearch} name="bathrooms" className="form-control px-2" id="bathrooms">
                                    <option  value="" defaultValue>BATHROOMS</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6+</option>
                                </select>
                            </li>
        
                        </ul>
                    </section>
                </div>
        
            </header>
        )

    }

}
const mapStateToProps = state => ({
    types: state.properties.types,
    searchedParam: state.utility.searchedParam,
})

const mapDispatch = dispatch => ({ 
    searchProperties: searchParam => dispatch(searchProperties(searchParam)),
    updateSearchParams: searchParam => dispatch({type: UPDATE_SEARCH_PARAM, payload: searchParam})
  })

export default connect(mapStateToProps, 
    { 
        ...mapDispatch,
        getPropertyTypes,
        searchProperties,
        updateSearchParams: searchParam => ({type: UPDATE_SEARCH_PARAM, payload: searchParam})
    })(HeaderSearch);