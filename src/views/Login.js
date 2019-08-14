import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../config'
import API from '../utils/api'
import Auth from '../utils/auth'
import Footer from '../component/Footer'
import SpinnerPage from '../component/Spinner'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import '../notifications.css'
let api = new API();
let auth = new Auth()


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = async () => {
    console.log(this.state)
    await this.setState({ loading: true })
    let response = await api.login({ email: this.state.email, password: this.state.password });
    console.log(response)
    if (!!response) {
      window.location.replace('/');
    }
    else {
      NotificationManager.error('Error', "Login details incorrect", 5000);
      this.setState({email:"", password: "", loading: false})
    }
  }
  createNotification = (type, message) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error', message, 5000);
          break;
      }
    };
  };
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
              <button className="btn btn-outline-dark" type="button" onClick={this.createNotification('error', 'Not implemented yet')}>Register</button>
            </form>
          </div>
        </nav>
        <NotificationContainer />
        <div className="container mt-5 mb-5" >
          <div className="row align-items-center ">
            <div className="col-lg-4 col-m-4 col-sm-6 mx-auto">
              <div className="bg-white jumbotron body">
                <h4>Admin</h4>
                <p>Login to continue</p>
                {/* <span className=""> */}
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <button
                  className="btn  SNbtn"
                  type="submit"
                  onClick={() => this.handleSubmit()}
                  style={{ width: "100%", marginTop: "1em", marginLeft: "0.5em" }}
                  disabled={this.state.loading}
                // value="Login"
                > {this.state.loading ?
                  <SpinnerPage />
                  : "Login"} </button>
                {/* <button className="btn  SNbtn" type="button" name="button" style={{width:"100%", marginTop:"1em"}}> <a href="dashboard.html" className="textblack"> Login </a></button> */}

                {/* </span> */}
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