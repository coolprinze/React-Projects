import React, { Component } from 'react';


class App extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
              <div>
                 <div className="row">
                        <div className="col-sm-12 py-3">
                            <div className="card" style={{background: '#FAFAFA'}}>
                                <div className="card-header">
                                    Advance Filter Option
                                </div>
                                <div className="card-body">
                                    <form action="propertylisting.html">
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="category">Category</label>
                                                <select name="category" id="category" className="form-control py-0">
                                                        <option value="1">Rent</option>
                                                        <option value="2">Sale</option>
                                                        <option value="3" >Shortlet</option>
                                                        <option value="4" >JV</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="state">State</label>
                                                <select name="state" className="form-control py-0">  
                                                        <option value="1">Lagos</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="locality">Locality</label>
                                                <select name="area" className="form-control py-0">
                                                        <option value="1">Lekki</option>
                                                        <option value="2">Banana Island</option>
                                                        <option value="3" >VI</option>
                                                        <option value="4" >Ikoyi</option>
                                                        
                                                </select>
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="types">Types</label>
                                                <select name="tid" className="form-control py-0">
                                                        <option value="0"  >All Types</option>
                                                        <option value="1" >Flat</option>
                                                        <option value="2" >House</option>
                                                        <option value="5" >Land</option>
                                                        <option value="3" >Commercial Property</option>
                                                        <option value="6" >Event Centre / Venue</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label htmlFor="bedrooms">Bedrooms</label>
                                                <select name="bedrooms" id="bedrooms" className="form-control py-0">
                                                        <option value="0">Any</option>
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
                                                <select name="minprice" id="minprice" className="form-control py-0">
                                                        <option value="0"  >No Min</option>
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
                                                <select name="maxprice" id="maxprice" className="form-control ">     
                                                        <option value="0"  >No Max</option>
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
                                                <a href=""></a>
                                                <button className="btn btn-lg col-sm-12" style={{background: '#FF8C00'}}>Search</button>
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

export default App;