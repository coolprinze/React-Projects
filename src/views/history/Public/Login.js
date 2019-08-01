import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config'
import Header from "../../component/Header/UserHeader"


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            authStatus: false,
            authRes: {},
        }
        this.handleChange = this.handleChange.bind(this)
        this.auth = this.auth.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    authRequest = async () => {
        var data = {
            email: this.state.email,
            password: this.state.password
        }
        const res = await fetch(`${config.BASE_URL}/login`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        const payload = await res.json();
        if (res.status === 200) {
            this.setState({
                authStatus: true,
                authRes: payload
            })
            return
        } else {
            alert("Authentication failed")
        }
    }
    getUser = async () => {

    }
    async auth(e) {
        e.preventDefault()
        await this.authRequest()
        if (this.state.authStatus) {
            localStorage.setItem("token", this.state.authRes.access_token)
            localStorage.setItem("tokenExpires", this.state.authRes.expires_at)
            localStorage.setItem("signedIn", true)
        }
    }
    render() {
        if (localStorage.getItem('signedIn')) {
            return (<Redirect to='/user' />)
        }
        if (this.state.authStatus) {
            return (<Redirect to='/user' />)
        }
        return (
            <React.Fragment>
                <nav className="navbar bg-white">
                    <a className="navbar-brand" href="#"> <img src="images/logo.jpg" alt="" /> </a>
                    <div className="" >
                        <form className="form-inline">
                            <button className="btn btn-outline-dark" type="button">Register</button>
                        </form>
                    </div>
                </nav>
                <div className="container mt-5 mb-5" >
                    <div className="row align-items-center ">
                        <div className="col-lg-4 col-m-4 col-sm-6 mx-auto">
                            <div className="bg-white jumbotron body">
                                <h4>Admin</h4>
                                <p>Login to continue</p>
                                <form className="" action="index.html" method="post">
                                    <label htmlFor="name">Username</label>
                                    <br />
                                    <input type="text" name="name"  />
                                    <br />
                                    <label htmlFor="password">Password</label>
                                    <br />
                                    <input type="password" name="password" value=""style={{}} />
                                    <br />
                                    <input className="btn  SNbtn" type="submit" name="" style={{width:"100%", marginTop:"1em"}} value="Login" />
                                    {/* <button className="btn  SNbtn" type="button" name="button" style={{width:"100%", marginTop:"1em"}}> <a href="dashboard.html" className="textblack"> Login </a></button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;