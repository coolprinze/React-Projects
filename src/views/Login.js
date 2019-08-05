import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../config'
import API from '../utils/api'
import Footer from '../component/Footer'
let api = new API();


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = async() => {
    await api.login({email: this.state.email, password: this.state.password});
    this.setState({
      email: "",
      password: ""
    });
  }
  // authRequest = async () => {
  //   var data = {
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //   const res = await fetch(`${config.BASE_URL}/login`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   })
  //   const payload = await res.json();
  //   if (res.status === 200) {
  //     this.setState({
  //       authStatus: true,
  //       authRes: payload
  //     })
  //     return
  //   } else {
  //     alert("Authentication failed")
  //   }
  // }
  // getUser = async () => {

  // }
  // async auth(e) {
  //   e.preventDefault()
  //   await this.authRequest()
  //   if (this.state.authStatus) {
  //     localStorage.setItem("token", this.state.authRes.access_token)
  //     localStorage.setItem("tokenExpires", this.state.authRes.expires_at)
  //     localStorage.setItem("signedIn", true)
  //   }
  // }
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
                <span className="">
                  <label htmlFor="name">Email</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                  <br />
                  <input
                    className="btn  SNbtn"
                    type="submit"
                    onClick={() => this.handleSubmit()}
                    style={{ width: "100%", marginTop: "1em" }}
                    value="Login"
                  />
                  {/* <button className="btn  SNbtn" type="button" name="button" style={{width:"100%", marginTop:"1em"}}> <a href="dashboard.html" className="textblack"> Login </a></button> */}

                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login;