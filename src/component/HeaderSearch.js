import React, { Component } from 'react';
import NumberFormat from 'react-number-format'
import SearchBar from './SearchBar';

class HeaderSearch extends Component {

    prices = () => {
        
        let prices = []
        for(let i=100000; i < 10000000; i+=100000) {
            prices = prices.concat(i)
        }

        return prices
    }

    render() {

        const prices = this.prices().map(price => <NumberFormat key={price} value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <option value={price}>{value}</option>} />
        )
        return ( 
            <header>
                <div className="container-fluid search-bar d-flex align-items-center flex-xl-row">
                    <section className="container">
                        <ul className="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                            <li className="col-lg-3 d-flex flex-column justify-content-center align-items-center px-0  text-center">
                                {/* <input type="search" name="" className="form-control px-2" id="" placeholder="Lekki, Lagos" /> */}
                                <SearchBar />

                            </li>
                            {/* <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select name="location_id" className="form-control px-2" id="location_id">
                                    <option disabled hidden selected>LOCATION</option>
                                </select>
                            </li> */}
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select name="min_price" className="form-control px-2" id="min_price">
                                    <option disabled hidden selected>MIN PRICE</option>
                                    {prices}
                                </select>
                            </li>
        
                            <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center text-white">
                                <div className="text-white px-0 pb-3">to</div>
                            </li>
        
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select name="max_price" className="form-control px-2" id="max_price">
                                    <option disabled hidden selected>MAX PRICE</option>
                                </select>
                            </li>
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-2 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select name="type_id" className="form-control px-2" id="type_id">
                                    <option disabled hidden selected>PROPERTY TYPE</option>
                                </select>
                            </li>
                            <div className="border-right pl-0" style={{ height: '79px' }}></div>
                            <li className="col-lg-1 d-flex flex-column justify-content-center align-items-center px-0 text-center">
                                <select name="bathrooms" className="form-control px-2" id="bathrooms">
                                    <option disabled hidden selected>BATHROOMS</option>
                                </select>
                            </li>
        
                        </ul>
                    </section>
                </div>
        
            </header>
        )

    }

}

export default HeaderSearch;