import React, { Component } from 'react';
import API from "../../api";
import config from '../../config'
import Header from "../../component/Header/UserHeader"
import Axios from 'axios';


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                name:"",
                email:"",
                username:"",
                password:"",
                password_confirmation:"",
                role:0,
                subscribe:true
            }
        }
    }
    componentDidMount() {

    }

    render() {
        // async const register = () => {
        //     try{
        //         const res = await Axios.post(config.BASE_URL+`/register`,JSON.stringify(this.state.user))
        //     }
        // }
        return ( 
            <React.Fragment>
            <Header />
                <section className="container-fluid properties bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3 bg-white  py-5 px-5 my-5" style={{borderRadius:"10px"}}>
                                <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}} >Register</h3>
                                <h6 className="text-muted py-2">One Step closer to finding you next property</h6>
                                <form>
                                    <div className="form-group py-2">
                                        <label for="firstName">First Name</label>
                                        <input type="email" className="form-control" id="firstName" aria-describedby="firstNameHelp"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" className="form-control" id="lastName"/>

                                    </div>

                                    <div className="form-group py-2">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email"/>

                                    </div>

                                    <div className="form-group py-2">
                                        <label for="email">Account Type</label>

                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheckDisabled1"/>
                                            <label className=" custom-control-label " for="customCheckDisabled1">Individual</label>
                                        </div>

                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheckDisabled1"/>
                                            <label className=" custom-control-label " for="customCheckDisabled1">Estate Agent</label>
                                        </div>
                                    </div>

                                    <div className="form-group py-2">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" id="password"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <label for="cpassword">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpassword"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheckDisabled1"/>
                                            <label className=" custom-control-label " for="customCheckDisabled1">I accept terms &amp; condition and privacy policy </label>
                                        </div>

                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheckDisabled1"/>
                                            <label className=" custom-control-label " for="customCheckDisabled1">I want to recieve castle newsletter</label>
                                        </div>
                                    </div>
                                    <div className="row my-3 ">
                                        <div className="col-sm-12 ">
                                            <button className="btn btn-block text-white" style={{background:"#FF8C00"}}>Register</button>
                                        </div>
                                    </div>
                                    <div className="row my-4 ">
                                        <div className="col-sm-4 ">
                                            <hr/>
                                        </div>
                                        <div className="col-sm-4 text-center ">
                                            Or Sign in with
                                        </div>
                                        <div className="col-sm-4 ">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="row my-3 ">
                                        <div className="col-sm-6 ">
                                            <button className="btn btn-block btn-google text-white ">Google</button>
                                        </div>

                                        <div className="col-sm-6 ">
                                            <button className="btn btn-block btn-facebook text-white ">Facebook</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Register;