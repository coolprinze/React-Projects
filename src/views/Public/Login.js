import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import config from '../../config'
import Header from "../../component/Header/UserHeader"


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            authStatus:false,
            authRes:{},
        }
        this.handleChange = this.handleChange.bind(this)
        this.auth = this.auth.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    authRequest = async () => {
        var data = {
            email:this.state.email,
            password:this.state.password
        }
        const res = await fetch(`${config.BASE_URL}/login`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json' 
            },
            method:'POST',
            body:JSON.stringify(data)
        })
        const payload = await res.json();
        if (res.status === 200){
            this.setState({
                authStatus:true,
                authRes:payload
            })
            return
        }else{
            alert("Authentication failed")
        }
    }
    getUser = async () => {

    }
    async auth(e){
        e.preventDefault()
        await this.authRequest()
        if (this.state.authStatus){
            localStorage.setItem("token",this.state.authRes.access_token)
            localStorage.setItem("tokenExpires",this.state.authRes.expires_at)
            localStorage.setItem("signedIn",true)
        }
    }
    render() {
        if (localStorage.getItem('signedIn')){
            return (<Redirect to='/user' />)
        }
        if (this.state.authStatus){
            return (<Redirect to='/user' />)
        }
        return ( 
            <React.Fragment>
                <section className="container-fluid properties bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3 bg-white py-5 px-5 my-5" style={{borderRadius:"10px"}}>
                                <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}}>Login</h3>
                                <h4 className="text-muted py-2">Login to continue</h4>
                                <form onSubmit={this.auth}>
                                    <div className="form-group py-2">
                                        <label for="email">Email</label>
                                        <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="password">Password</label>
                                        <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password"/>
                                        <small id="emailHelp" className="form-text text-muted text-right">
                                            <a href="forgetpassword.html">
                                                Forget Password?
                                            </a>
                                        </small>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-sm-12 ">
                                            <button  className="btn btn-block" style={{background:"#FF8C00"}}>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-sm-4">
                                            <hr/>
                                        </div>
                                        <div className="col-sm-4 text-center">
                                            Or Sign in with
                                        </div>
                                        <div className="col-sm-4">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-sm-6">
                                            <button className="btn btn-block btn-google text-white">Google</button>
                                        </div>

                                        <div className="col-sm-6">
                                            <button className="btn btn-block btn-facebook text-white">Facebook</button>
                                        </div>
                                    </div>

                                    <div className="row my-4">
                                        <h5 className="col-sm-12 text-center">Don’t have an account?</h5>
                                        <h6 className="col-sm-12 text-center"><a href="register.html" style={{color:"#4D93FC"}}>Register</a></h6>
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

export default Login;