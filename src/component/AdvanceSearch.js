import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPropertyCategories, getStates, getLocalities, getPropertyTypes, searchProperties } from '../actions';


class App extends Component {
    state = {
        state_id: '',
        bedrooms: '',
        locality_id: '',
        status_id: 1,
        type_id: '',
        min_price: '',
        max_price: '',
    }
    constructor(props) {
        super(props);
        this.props.getPropertyCategories();
        this.props.getPropertyTypes();
        this.props.getStates();
    }

    
    
    onChange = e =>{
        if (e.target.id === "state_id"){
            this.props.getLocalities(parseInt(e.target.value))
        }
        this.setState({[e.target.name]: e.target.value})
    }

    onSearchClick = async e => {
        await e.preventDefault()
        await this.props.searchProperties(this.state);
    }


    render() {
        const { categories, states, localities, types } = this.props

        return ( 
              <div>
                 <div className="row">
                        <div className="col-sm-12 py-3">
                            <div className="card" style={{background: '#FAFAFA'}}>
                                <div className="card-header">
                                    Advance Filter Option
                                </div>
                                <div className="card-body">
                                    <form >
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="category">Category</label>
                                                <select onChange={this.onChange} name="status_id" id="category" className="form-control py-0">
                                                        <option value=''>Any</option>
                                                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="state_id">State</label>
                                                <select onChange={this.onChange} name="state_id" id="state_id" className="form-control py-0">
                                                    <option value=''>Any</option>
                                                    {states.map(state => <option key={state.id} value={state.id}>{state.name}</option>)}
                                                </select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="locality">Locality</label>
                                                <select onChange={this.onChange} name="locality_id" className="form-control py-0">
                                                    <option value=''>Any</option>
                                                    {localities.map(locality => <option key={locality.id} value={locality.id}>{locality.name}</option>)}
                                                        
                                                </select>
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="types">Types</label>
                                                <select onChange={this.onChange} name="type_id" id="types" className="form-control py-0">
                                                    <option value=''>Any</option>
                                                    {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                                                </select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="bedrooms">Bedrooms</label>
                                                <select onChange={this.onChange} name="bedrooms" id="bedrooms" className="form-control py-0">
                                                        
                                                    <option value=''>Any</option>
                                                    <option value="1" >1</option>
                                                    <option value="2" >2</option>
                                                    <option value="3" >3</option>
                                                    <option value="4" >4</option>
                                                    <option value="5" >5</option>
                                                    <option value="6" >6+</option>
                                                </select>
                                             </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="minPrice">Min Price</label>
                                                <select onChange={this.onChange} name="min_price" id="minprice" className="form-control py-0">
                                                        <option value=""  >No Min</option>
                                                        <option value="100000" >₦ 100,000</option>
                                                        <option value="250000" >₦ 250,000</option>
                                                        <option value="500000" >₦ 500,000</option>
                                                        <option value="750000" >₦ 750,000</option>
                                                        <option value="1000000" >₦ 1,000,000</option>
                                                        <option value="2000000" >₦ 2,000,000</option>
                                                        <option value="5000000" >₦ 5,000,000</option>
                                                        <option value="10000000" >₦ 10,000,000</option>
                                                        <option value="20000000" >₦ 20,000,000</option>
                                                        <option value="40000000" >₦ 40,000,000</option>
                                                        <option value="60000000" >₦ 60,000,000</option>
                                                        <option value="80000000" >₦ 80,000,000</option>
                                                        <option value="100000000" >₦ 100,000,000</option>
                                                        <option value="150000000" >₦ 150,000,000</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="maxPrice">Max Price</label>
                                                <select onChange={this.onChange} name="max_price" id="maxprice" className="form-control ">     
                                                        <option value=""  >No Max</option>
                                                        <option value="100000" >₦ 100,000</option>
                                                        <option value="250000" >₦ 250,000</option>
                                                        <option value="500000" >₦ 500,000</option>
                                                        <option value="750000" >₦ 750,000</option>
                                                        <option value="1000000" >₦ 1,000,000</option>
                                                        <option value="2000000" >₦ 2,000,000</option>
                                                        <option value="5000000" >₦ 5,000,000</option>
                                                        <option value="10000000" >₦ 10,000,000</option>
                                                        <option value="20000000" >₦ 20,000,000</option>
                                                        <option value="40000000" >₦ 40,000,000</option>
                                                        <option value="60000000" >₦ 60,000,000</option>
                                                        <option value="80000000" >₦ 80,000,000</option>
                                                        <option value="100000000" >₦ 100,000,000</option>
                                                        <option value="150000000" >₦ 150,000,000</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <button onClick={this.onSearchClick} className="btn btn-lg col-sm-12" style={{background: '#FF8C00'}}>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
              </div>
          
        )

    }

}

const mapStateToProps = state => ({
    categories: state.properties.categories,
    states: state.utility.states,
    localities: state.utility.localities,
    types: state.properties.types,
})

export default connect(mapStateToProps, { getPropertyCategories, getLocalities, getStates, getPropertyTypes, searchProperties })(App);