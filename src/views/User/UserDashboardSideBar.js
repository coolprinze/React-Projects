import React from 'react';
import {Link} from 'react-router-dom'

const UserDashboardSideBar = ({ savedProperties, history, alert, profile }) => {
   
    const logout = () => localStorage.setItem("signedIn",false)
    
    return ( 
        <React.Fragment>
            <div className="col-md-3">
                <div className="profile-sidebar">
                    <div className="profile-usermenu">
                        <h3 className="px-3 pb-3" style={{
                            borderBottom:"1px solid #f0f4f7"
                        }}>My Account</h3>
                        <ul>
                            <li className={`py-3 ${savedProperties? "active":''}`}>
                                <Link to='/user'className="py-3 px-5"> Saved Properties
                                </Link>
                            </li>
                            <li className={`py-3 ${history? "active":''}`}>
                                <Link to="/user/search-history" className="py-3 px-5">Search History </Link>
                            </li>
                            <li className={`py-2 ${alert? "active":''}`} >
                                <Link to='/user/alerts'className="py-3 px-5"> Alert 
                                </Link>
                            </li>
                            <li className={`py-2 ${profile? "active":''}`}>
                                <Link to='/user/profile'className="py-3 px-5"> Profile 
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link to="#" onClick={logout()}className="py-3 px-5">Logout </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}

UserDashboardSideBar.defaultProps = {
    savedProperties: false,
    profile: false,
    alert: false,
}

export default UserDashboardSideBar