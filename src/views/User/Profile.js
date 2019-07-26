import React, { Component } from 'react';
import config from '../../config'
import UserDashboardSideBar from './UserDashboardSideBar'
import Header from "../../component/Header/UserHeader"


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile:{}
        }
    }
    componentDidMount() {

    }
    getUser = async (token) => {
        const res = await fetch(`${config.BASE_URL}/registration`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ` +token
            },
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                profile: payload.data
            })
        }else{
            
        }
    }
    render() {
        return ( 
            <React.Fragment>
                <Header />
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                                <UserDashboardSideBar active="savedProperties"/>    
                                <div className="col-md-9">
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 bg-dark pt-4">
                                            <h6 className="text-white">Name:</h6>
                                            <h3 className="text-white">James Agbalumo</h3>
                                        </div>
                                    </div>
                                    <div className="row mx-0 my-0 bg-white">
                                        <div className="col-sm-12">
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="firstName">First Name</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" value="James"/>
                                                    </div>
                                                    <div className="col">
                                                        <label for="lastName">Last Name</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" value="Agbalumo"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="email">Email Address</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" value="jamesagbalumo@gmail.com"/>
                                                    </div>
                                                    <div className="col">
                                                        <label for="mobileno">Mobile No.</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" value="08023345678"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group py-2">
                                                <label for="address">House Address</label>
                                                <input type="text" className="form-control form-control-lg bg-white" id="address" value="28, King Okorodudu Street Surulere Lagos"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 py-3">
                                            <h6>Change Password</h6>
                                        </div>
                                    </div>
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 py-3 bg-white">
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="oldpassword">Old Password</label>
                                                        <input type="password" className="form-control form-control-lg bg-white"/>
                                                    </div>
                                                    <div className="col">
                                                        <label for="newpassword">New Password</label>
                                                        <input type="password" className="form-control form-control-lg bg-white"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col d-flex justify-content-end">
                                                        <button className="btn btn-lg" style={{background:"#FF8C00"}}>Save Changes</button>
                                                    </div>
                                                </div>
                                            </div>
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

export default Profile;