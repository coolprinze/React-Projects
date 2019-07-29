import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UserDashboardSideBar extends Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(){
        localStorage.setItem("signedIn",false)
    }
    render() {
        return ( 
            <React.Fragment>
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-usermenu">
                            <h3 className="px-3 pb-3" style={{
                                borderBottom:"1px solid #f0f4f7"
                            }}>My Account</h3>
                            <ul>
                                <li className="py-3 active">
                                    <Link to='/user/savedproperties'>
                                        <a className="py-3 px-5"> Saved Properties</a>
                                    </Link>
                                </li>
                                <li className="py-2" >
                                    <Link to='/user/alerts'>
                                        <a className="py-3 px-5"> Alert </a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to='/user/profile'>
                                        <a className="py-3 px-5"> Profile </a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <a onClick={this.logout}className="py-3 px-5">Logout </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserDashboardSideBar