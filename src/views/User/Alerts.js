import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import SubHeader from "../../component/Header/SubHeader"
import deleteIcon from '../Agent/agent-listing-images/img/icon/delete.png'
import bellIcon from '../Agent/agent-listing-images/img/icon/bell-sm.png'
import UserDashboardSideBar from './UserDashboardSideBar';
import { loadPage, getAlerts, getUser } from '../../actions';
import config from '../../config';

class Alerts extends Component {
    async componentDidMount(){
        document.title = await `${config.pageTitle} User Alerts`;
        await this.props.getAlerts();
        await this.props.loadPage();
    }
    render() {
        var noAlerts = "No Alerts"
        var alerts = this.props.alerts.data.map((item)=> {
            return (
                <tr key={item.id}>
                    <td><Link>Properties in Lagos</Link></td>
                    <td> <img src={bellIcon} alt="" className="mr-2" /> Instantly</td>
                    <td><img src={deleteIcon} alt=""/></td>
                </tr>
            ) 
        })
        return ( 
            <React.Fragment>
                <SubHeader username={this.props.user.name}/>
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                            
                                <UserDashboardSideBar alert />
                                <div className="col-md-9">
                                        <div className="row mx-0 my-0 bg-white" style={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.07)",borderRadius:"10px"}}>
                                            <div className="col-sm-12 px-0 d-flex flex-column" style={{minHeight:"569px"}}>
                                                <table className="table p-2" style={{width:"100%"}}>
                                                <thead className="bg-grey" style={{border:"none"}}>
                                                    <tr>
                                                        <th scope="col" style={{border:"none"}}>Search</th>
                                                        <th scope="col" style={{border:"none"}}>Action</th>
                                                        <th scope="col" style={{border:"none"}}>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <tr>
                                                        <td><a href="propertyview.html">Properties in Lagos</a></td>
                                                        <td> <img src={bellIcon} alt="" className="mr-2"/> Instantly</td>
                                                        <td><img src={deleteIcon} alt=""/></td>
                                                    </tr> */}
                                                    {alerts.length < 1 ? noAlerts : alerts}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    alerts: state.user.alerts,
    user: state.auth.user
})

export default connect(mapStateToProps, { getUser, loadPage, getAlerts })(Alerts);
