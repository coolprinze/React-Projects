import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { authenticateUser } from '../../actions/AuthActions';



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
    }
    getUser = async () => {

    }
    auth = async e => {
        await e.preventDefault()
        const { email, password } = await this.state
        await this.props.authenticateUser({ email, password })
    }
    render() {
        if (this.props.isAuthenticated){
            return (<Redirect to='/user' />)
        }
        return ( 
            <section className="container-fluid properties bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3 bg-white py-5 px-5 my-5" style={{borderRadius:"10px"}}>
                            <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}}>Login</h3>
                            <h4 className="text-muted py-2">Login to continue</h4>
                            <form onSubmit={this.auth}>
                                <div className="form-group py-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group py-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password"/>
                                    <small id="emailHelp" className="form-text text-muted text-right">
                                        <Link to="/forgot-password">
                                            Forget Password?
                                        </Link>
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
                                    <div className="col-sm-6 py-1">
                                        <button className="btn btn-block btn-google text-white">Google</button>
                                    </div>

                                    <div className="col-sm-6 py-1">
                                        <button className="btn btn-block btn-facebook text-white">Facebook</button>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <h5 className="col-sm-12 text-center">Don’t have an account?</h5>
                                    <h6 className="col-sm-12 text-center"><Link to="/register" style={{color:"#4D93FC"}}>Register</Link></h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { authenticateUser })(Login);