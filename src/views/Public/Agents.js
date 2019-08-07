import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { agent } from '../../assets/img';

class Agents extends Component {
  render() {
    return (
      <Fragment>
        <section className="container-fluid mt-5 properties">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-lg-sm-8 bg-white py-4 px-5" style={{ borderRadius: "10px" }}>
                        <div className="row pb-2 border-bb">
                            <div className="col-sm-9 px-0">
                                <li className="d-flex justify-content-start align-items-center py-2">
                                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                                    <span className="ml-3"> <h4 className="mb-0">D Properties Consult</h4></span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mx-2">
                                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                                    <span className="pl-4">31, Fola Osibo, Adminality Way, Lekki Phase 1</span>
                                </li>
                            </div>
                            <div className="col-sm-3 mt-4 pt-0 px-0">
                                <button className="btn btn-sm btn-dark pull-right"> View Listing</button>
                            </div>
                        </div>
    
                        <div className="row pb-2 border-bb">
                            <div className="col-sm-9 px-0">
                                <li className="d-flex justify-content-start align-items-center py-2">
                                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                                    <span className="ml-3"> <h4 className="mb-0">D Properties Consult</h4></span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mx-2">
                                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                                    <span className="pl-4">31, Fola Osibo, Adminality Way, Lekki Phase 1</span>
                                </li>
                            </div>
                            <div className="col-sm-3 mt-4 pt-0 px-0">
                                <button className="btn btn-sm btn-dark pull-right"> View Listing</button>
                            </div>
                        </div>
    
                        <div className="row pb-2 border-bb">
                            <div className="col-sm-9 px-0">
                                <li className="d-flex justify-content-start align-items-center py-2">
                                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                                    <span className="ml-3"> <h4 className="mb-0">D Properties Consult</h4></span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mx-2">
                                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                                    <span className="pl-4">31, Fola Osibo, Adminality Way, Lekki Phase 1</span>
                                </li>
                            </div>
                            <div className="col-sm-3 mt-4 pt-0 px-0">
                                <button className="btn btn-sm btn-dark pull-right"> View Listing</button>
                            </div>
                        </div>
    
                        <div className="row pb-2 border-bb">
                            <div className="col-sm-9 px-0">
                                <li className="d-flex justify-content-start align-items-center py-2">
                                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                                    <span className="ml-3"> <h4 className="mb-0">D Properties Consult</h4></span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mx-2">
                                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                                    <span className="pl-4">31, Fola Osibo, Adminality Way, Lekki Phase 1</span>
                                </li>
                            </div>
                            <div className="col-sm-3 mt-4 pt-0 px-0">
                                <button className="btn btn-sm btn-dark pull-right"> View Listing</button>
                            </div>
                        </div>
    
                        <div className="row pb-2 border-bb">
                            <div className="col-sm-9 px-0">
                                <li className="d-flex justify-content-start align-items-center py-2">
                                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                                    <span className="ml-3"> <h4 className="mb-0">D Properties Consult</h4></span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mx-2">
                                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                                    <span className="pl-4">31, Fola Osibo, Adminality Way, Lekki Phase 1</span>
                                </li>
                            </div>
                            <div className="col-sm-3 mt-4 pt-0 px-0">
                                <button className="btn btn-sm btn-dark pull-right"> View Listing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-4 pl-4">
                        <div className="row">
                            <div className="col-sm-12 pb-3">
                                <div className="card" height="18rem">
                                    <h5 className=" px-3 py-3">
                                        Search Castles
                                    </h5>
                                    <div className="card-footer" style={{ background: "#FF8C00" }}>
                                        <input type="text" placeholder="e.g Lekki, Lagos" className="form-control" style={{ minHeight: '50px'}} />
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
                                    <img src="img/advert.png" alt="" />
                                </div>
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="col-sm-12 py-3">
                                <div className="card" height="18rem">
                                    <h5 className=" px-3 py-3">
                                        Advertisement placement
                                    </h5>
                                    <img src="img/advert.png" alt="" />
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
    
        <section className="container d-flex justify-content-between align-items-center bg-white py-4 mt-5">
            <h5>Showing 1 to 5 of 40 enteries</h5>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
      </Fragment>
    )
  }
}

export default connect(null)(Agents)
