import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import API from "../../api";
import config from '../../config'
import Header from "../../component/Header/UserHeader"
import Axios from 'axios';


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            userName:"",
            accountType:0,
            password:"",
            cpassword:"",
            role:0,
            subscribe:true,
            status:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRole = this.handleRole.bind(this)
        this.register = this.register.bind(this)
    }
    componentDidMount() {

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleRole(e) {
        this.setState({
            role: e.target.value
        });
    }
    // call create user in register() to make API request
    createUser = async () => {
        var data = {
            name:this.state.firstName + " " + this.state.lastName,
            email:this.state.email,
            username: this.state.userName,
            password:this.state.password,
            password_confirmation: this.state.cpassword,
            role: parseInt(this.state.role, 10),
            subscribe: true
        }
        const res = await fetch(`${config.BASE_URL}/registration`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json' 
            },
            method:'POST',
            body:JSON.stringify(data)
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                status:true
            })
            alert("Registration done")
        }else{
            this.setState({
                status:true
            })// Redirect anyways until /registration endpoint is fixed
            alert("In progress")
        }
    }
    async register(e){
        e.preventDefault()
        //console.log(this.state)
        this.setState({
            status:true
        })
    }
    render() {
        if (this.state.status){
            return (<Redirect to='/user/login' />)
        }
        return ( 
            <React.Fragment>
            <Header />
                <section className="container-fluid properties bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3 bg-white  py-5 px-5 my-5" style={{borderRadius:"10px"}}>
                                <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}} >Register</h3>
                                <h6 className="text-muted py-2">One Step closer to finding you next property</h6>
                                <form onSubmit={this.register}>
                                    <div className="form-group py-2">
                                        <label for="firstName">First Name</label>
                                        <input type="text" onChange={this.handleChange} className="form-control" id="firstName" aria-describedby="firstNameHelp"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" onChange={this.handleChange} className="form-control" id="lastName"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="userName">Username</label>
                                        <input type="text" onChange={this.handleChange} className="form-control" id="userName"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="email">Email</label>
                                        <input type="email" onChange={this.handleChange} className="form-control" id="email"/>
                                    </div>
                                    {/* <div class="dropdown">
                                        <div class=" dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Account Type
                                        </div>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Individual</a>
                                            <a class="dropdown-item" href="#">Agent</a>
                                        </div>
                                    </div> */}
                                    <select value={this.state.role} onChange={this.handleRole}>
                                        <option value={1}>Account Type</option>
                                        <option value={1}>Subscriber</option>
                                        <option value={2}>Agent</option>
                                    </select>
                                    {/* <div className="form-group py-2">
                                        <label for="email">Account Type</label>
                                        <div className="custom-control custom-radio py-2" >
                                            <input enabled type="radio" onClick name="acctType" className="custom-control-input" id="individual"/>
                                            <label className=" custom-control-label " for="individual">Individual</label>
                                        </div>
                                        <div className="custom-control custom-radio py-2">
                                            <input type="radio" name="acctType" className="custom-control-input" id="agent"/>
                                            <label className=" custom-control-label " for="agent">Estate Agent</label>
                                        </div>
                                    </div> */}

                                    <div className="form-group py-2">
                                        <label for="password">Password</label>
                                        <input type="password" onChange={this.handleChange} className="form-control" id="password"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="cpassword">Confirm Password</label>
                                        <input type="password" onChange={this.handleChange} className="form-control" id="cpassword"/>
                                    </div>
                                    {/* <div className="form-group py-2">
                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="acceptTerms"/>
                                            <label className=" custom-control-label " for="acceptTerms">I accept terms &amp; condition and privacy policy </label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-2">
                                            <input type="checkbox" className="custom-control-input" id="subscribe"/>
                                            <label className=" custom-control-label " for="subscribe">I want to recieve castle newsletter</label>
                                        </div>
                                    </div> */}
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