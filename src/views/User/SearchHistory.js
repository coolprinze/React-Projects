import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';
import UserDashboardSideBar from './UserDashboardSideBar';
import SubHeader from '../../component/Header/SubHeader';
import { getUser, loadPage } from '../../actions';
import { connect } from 'react-redux'
import config from '../../config';


class SearchHistory extends Component {
    async componentDidMount(){
        document.title = await `${config.pageTitle} User Search History`;
        this.props.user === null?
        (async () => {
          await this.props.getUser();
          await this.props.loadPage()
        })():
        (async () =>{
          await this.props.loadPage()
        })()
    }
  render() {
    return (
      <Fragment>
        <SubHeader username={this.props.user.name}/>
        <section className="container-fluid py-5 properties bg-grey">
            <div className="container">
                <div className="col-sm-12">
                    <div className="row profile">
                        <UserDashboardSideBar history />
                        <div className="col-md-9">
                            <div className="row mx-0 my-0 bg-white" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.07)',
                                borderRadius: '10px' }}>
                                <div className="col-sm-12 px-0 d-flex flex-column" style={{ minHeight: '569px' }}>
                                    <table className="table p-2" style={{ width:'100%' }}>
                                        <thead className="bg-grey" style={{ border: "none"} }>
                                            <tr>
                                                <th scope="col" style={{ border: 'none' }}>Search</th>
                                                <th scope="col" style={{ border: 'none' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Link to="propertyview.html">Properties in Lagos</Link></td>
                                                <td>
                                                    <Link to="#" data-toggle="modal" data-target="#createAlert">
                                                        <img src="img/icon/bell-sm.png" className="pr-2" alt="" /> Create Alert
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link to="propertyview.html">2 bedroom in Yaba</Link></td>
                                                <td>
                                                    <Link to="#" data-toggle="modal" data-target="#createAlert">
                                                        <img src="img/icon/bell-sm.png" className="pr-2" alt="" /> Create Alert
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link to="propertyview.html">Self con in Ajah</Link></td>
                                                <td>
                                                    <Link to="#" data-toggle="modal" data-target="#createAlert">
                                                        <img src="img/icon/bell-sm.png" className="pr-2" alt="" /> Create Alert
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link to="propertyview.html">Land for sale in Lagos</Link></td>
                                                <td>
                                                    <Link to="#" data-toggle="modal" data-target="#createAlert">
                                                        <img src="img/icon/bell-sm.png" className="pr-2" alt="" /> Create Alert
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><Link to="propertyview.html">Properties in Abuja</Link></td>
                                                <td>
                                                    <Link to="#" data-toggle="modal" data-target="#createAlert">
                                                        <img src="img/icon/bell-sm.png" className="pr-2" alt="" /> Create Alert
                                                    </Link>
                                                </td>
                                            </tr>
    
    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
    
    
    
    
                            <section className="container d-flex justify-content-end align-items-center bg-white py-4">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
    
    
    
    
                        </div>
                    </div>
                </div>
    
            </div>
        </section>

        <div className="modal fade" id="createAlert" tabIndex="-1" role="dialog" aria-labelledby="createAlert" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="py-5 px-5">
                            <h5 className="text-center">Create Alert</h5>
                            <h6 className="text-center">For Properties matching your current search</h6>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Duration</label>
                                    <select className="form-control"></select>
                                </div>
                                <button type="Create" className="btn bg-orange" style={{ width: '100%"' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
    savedProperties: state.properties.listings,
    user: state.auth.user
})

export default connect(mapStateToProps, { getUser, loadPage })(SearchHistory);