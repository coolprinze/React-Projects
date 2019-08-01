import React, { Component } from 'react';
import config from '../../config'
import Header from "../../component/Header/UserHeader"
import img1 from "./agent-listing-images/properties/1.png"
import img2 from "./agent-listing-images/properties/2.png"
import img3 from "./agent-listing-images/properties/3.png"



class AgentListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            properties:[]
        }
    }
    componentDidMount() {
        this.getProperties()
    }
    async getProperties(){
        const res = await fetch(`${config.BASE_URL}/properties`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            method:'GET'
        })
        const payload = await res.json();
        if (res.status === 200 && payload.status === 1){
            this.setState({
                properties: payload.data.data
            })
        }else{
            alert('Something went wrong')
        }
    }
    render() {
        var properties = this.state.properties.map((item) =>{
            return (
                <div key={item.id} className="row py-3">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-8 col-lg-8 px-0 py-0">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="col-sm-4 col-lg-4 px-0 py-0">
                                <img src={item.image === "" ? img2:item.image} alt=""/>
                                <img src={item.image === "" ? img3:item.image} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 px-0 py-0 bg-white">
                        <div className="col-sm-12 py-2 px-2">
                            <h5>{item.title}</h5>
                            <span className="text-small">
                                {item.bedrooms === null ? 0: item.bedrooms} Bedrooms | 
                                {item.bathrooms === null ? 0: item.bathrooms} Bathrooms | 
                                {item.toilets === null ? 0: item.toilets} Toilets | 
                                {item.parking === null ? 0: item.parking} Parking
                            </span>
                            <h6 className="px-0 py-0">Ajah</h6>
                            <span>{item.description}</span>
                            <button className="btn btn-dark btn-listing">N {item.price}</button>
                            <div className="row py-1">
                                <div className="col-sm-8 col-lg-8">
                                    <span>Added {item.created_at}</span>
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
                                <div className="col-sm-3 mt-2 pr-1"><img src={item.image === "" ? img1:item.image} className="img rounded-circle" alt=""/></div>
                                <div className="col-sm-9">
                                    <span>{item.agent.name}</span>
                                    <div className="d-flex justify-content-between">
                                        <span>{item.agent.phone === null ? "No Number":item.agent.phone}</span>
                                        <span>View listing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
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
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="col-lg-4 d-flex flex-column justify-content-center align-items-center border-right">
                                                    <div className="dropdown">
                                                        <button className="dropdown-toggle custom-drp text-uppercase px-0 pb-3" type="button" id="bathroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            bathrooms
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="bathroom_drp">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                                                    <div className="dropdown">
                                                        <button className="dropdown-toggle custom-drp text-uppercase px-0 pb-3" type="button" id="bathroom_drp" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        bathrooms
                                                                    </button>
                                                        <div className="dropdown-menu" aria-labelledby="bathroom_drp">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
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
                <section className="container d-flex justify-content-between align-items-center bg-white py-4">
                    <h5>Showing 1 to 5 of 40 enteries</h5>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </React.Fragment>
        )
    }
}

export default AgentListing;


