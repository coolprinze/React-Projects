import React, { Component } from 'react';


class PostRequest extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <React.Fragment>
                <section className="container-fluid properties bg-grey">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3 bg-white py-5 px-5" style={{borderRadius:"10px"}}>
                                <h3 className="py-3" style={{fontSize:"2rem",fontWeight:"400"}}>Post A Request</h3>
                                <h6 className="text-muted py-2">Complete the form below and we would contact you</h6>
                                <form>
                                    <div className="form-group py-2">
                                        <label for="category">Category</label>
                                        <div className="form-inline">
                                            <div className="custom-control custom-checkbox form-in px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="sale"/>
                                                <label className=" custom-control-label " for="sale">Sale</label>
                                            </div>
                                            <div className="custom-control custom-checkbox px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="rent"/>
                                                <label className=" custom-control-label " for="rent">Rent</label>
                                            </div>

                                            <div className="custom-control custom-checkbox px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="shortlet"/>
                                                <label className=" custom-control-label " for="shortlet">Shortlet</label>
                                            </div>

                                            <div className="custom-control custom-checkbox px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="joinventure"/>
                                                <label className=" custom-control-label " for="joinventure">Join Venture</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-group py-2">
                                        <div className="row">
                                            <div className="col">
                                                <label for="lastName">Type</label>
                                                <input type="text" className="form-control" placeholder="First name"/>
                                            </div>
                                            <div className="col">
                                                <label for="lastName">No of bedrooms</label>
                                                <input type="text" className="form-control" placeholder="Last name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="lastName">Budget</label>
                                        <input type="text" className="form-control" id="lastName"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <div className="row">
                                            <div className="col">
                                                <label for="state">State</label>
                                                <select name="state" id="" className="form-control">
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label for="locality">Locality</label>
                                                <select name="locality" id="" className="form-control">
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group py-2">
                                        <label for="email">Account Type</label>
                                        <div className="form-inline">
                                            <div className="custom-control custom-checkbox form-in py-2 px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="individual"/>
                                                <label className=" custom-control-label " for="individual">Individual</label>
                                            </div>

                                            <div className="custom-control custom-checkbox py-2 px-4">
                                                <input type="checkbox" className="custom-control-input px-1" id="agent"/>
                                                <label className=" custom-control-label " for="agent">Estate Agent</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group py-2">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group py-2">
                                        <label for="comment">Comments</label>
                                        <textarea name="comment" id="comment" rows="8" className="form-control"></textarea>
                                    </div>
                                    <div className="row my-4">
                                        <p className="col-sm-12 text-small"><i className="fa fa-asterisk text-danger"></i>By submitting you are agree that all data can be displayed on our website</p>
                                    </div>
                                    <div className="row my-3 ">
                                        <div className="col-sm-12 ">
                                            <button className="btn btn-block text-white" style={{background:"#FF8C00"}}>Send Request</button>
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

export default PostRequest;