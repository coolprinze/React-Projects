import React, { Component } from 'react';
import Header from "../../component/Header/UserHeader"


class Login extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <React.Fragment>
                <Header />
                <section className="container-fluid properties bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3 bg-white py-5 px-5 my-5" style={{borderRadius:"10px"}}>
                                <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}}>Login</h3>
                                <h4 className="text-muted py-2">Login to continue</h4>
                                <form>
                                    <div className="form-group py-2">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        <small id="emailHelp" className="form-text text-muted text-right">
                                            <a href="forgetpassword.html">
                                                Forget Password?
                                            </a>
                                        </small>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-sm-12 ">
                                            <a href="agent/dashboard.html" className="btn btn-block" style={{background:"#FF8C00"}}>
                                                Login
                                            </a>

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