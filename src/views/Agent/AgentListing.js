import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from "../../component/Header/UserHeader";
import { getAgentProperties, deleteProperty } from '../../actions';
import Paginate from '../../component/Paginate';
import PropertyView from '../../component/PropertyView';




class AgentListing extends Component {
    constructor(props){
        super(props)
        this.props.getAgentProperties()
        this.onDelete = this.deleteListing.bind(this)
    }

    deleteListing = async (id) => {
        if (window.confirm("Are you sure you want to delete this listing?")){
            await this.props.deleteProperty(id)
        }
    }
    renderProperties = () => this.props.properties.data.length?
    this.props.properties.map((item) =>
            <p>Hello</p>
        )
    : <p>You Have no listging at the moment</p>
    
    
    
    render() {
        const { data } = this.props.properties
        const properties = data.length?
        data.map((item) =>{
            return (
                <PropertyView  key={item.id}  data={item} onDelete={this.deleteListing.bind(this, item.id)} />
            )
        }): <p>You Have no listging at the moment</p>
        return ( 
            <React.Fragment>
                <Header />
                    <section className="container-fluid properties bg-grey py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-lg-sm-8">
                                {properties}
                            </div>
                            <div className="col-sm-4 col-lg-4 pl-4">
                                <div className="row">
                                    <div className="col-sm-12 py-3">
                                        <div className="card px-3 py-3" height="18rem">
                                            <h5>
                                                Filter Agent Listing
                                            </h5>
                                            <div className="row px-3 py-3">
                                                <li className="col-lg-4 d-flex flex-column justify-content-center align-items-center border-right">
                                                    <div className="dropdown">
                                                        <button className="dropdown-toggle custom-drp text-uppercase px-0 pb-3" type="button" id="price_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Prices
                                                                </button>
                                                        <div className="dropdown-menu" aria-labelledby="price_drp">
                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="col-lg-4 d-flex flex-column justify-content-center align-items-center border-right">
                                                    <div className="dropdown">
                                                        <button className="dropdown-toggle custom-drp text-uppercase px-0 pb-3" type="button" id="bathroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            bathrooms
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="bathroom_drp">
                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="dropdown">
                                                        <button className="dropdown-toggle custom-drp text-uppercase px-0 pb-3" type="button" id="bathroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        bathrooms
                                                                    </button>
                                                        <div className="dropdown-menu" aria-labelledby="bathroom_drp">
                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 py-3">
                                        <div className="card" height="18rem">
                                            <h5 className=" px-3 py-3">
                                                Search Castles
                                            </h5>
                                            <div className="card-footer" style={{background:"#FF8C00"}}>
                                                <input type="text" placeholder="e.g Lekki, Lagos" className="form-control" style={{minHeight:"50px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 py-3">
                                        <div className="card" height="18rem">
                                            <h5 className=" px-3 py-3">
                                                Advertisement placement
                                            </h5>
                                            <img src="img/advert.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 py-3">
                                        <div className="card" height="18rem">
                                            <h5 className=" px-3 py-3">
                                                Advertisement placement
                                            </h5>
                                            <img src="img/advert.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    <Paginate data={this.props.properties} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.properties.listings
})

export default connect(mapStateToProps, { getAgentProperties, deleteProperty })(AgentListing);


