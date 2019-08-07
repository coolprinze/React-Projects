import React, { Component } from 'react';
import Header from "../../component/Header/UserHeader"


class PostRequest extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <React.Fragment>
                <Header />
                    <section class="container-fluid properties bg-grey">
                        <div class="container py-5">
                            <div class="row">
                                <div class="col-sm-6 offset-sm-3 bg-white py-5 px-5" style={{borderRadius:"10px"}}>
                                    <h3 class="py-3" style={{fontSize:"2rem",fontWeight:"400"}}>Post A Request</h3>
                                    <h6 class="text-muted py-2">Complete the form below and we would contact you</h6>
                                    <form>
                                        <div class="form-group py-2">
                                            <label for="category">Category</label>
                                            <div class="form-inline">
                                                <div class="custom-control custom-checkbox form-in px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="sale"/>
                                                    <label class=" custom-control-label " for="sale">Sale</label>
                                                </div>
                                                <div class="custom-control custom-checkbox px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="rent"/>
                                                    <label class=" custom-control-label " for="rent">Rent</label>
                                                </div>

                                                <div class="custom-control custom-checkbox px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="shortlet"/>
                                                    <label class=" custom-control-label " for="shortlet">Shortlet</label>
                                                </div>

                                                <div class="custom-control custom-checkbox px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="joinventure"/>
                                                    <label class=" custom-control-label " for="joinventure">Join Venture</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="form-group py-2">
                                            <div class="row">
                                                <div class="col">
                                                    <label for="lastName">Type</label>
                                                    <input type="text" class="form-control" placeholder="First name"/>
                                                </div>
                                                <div class="col">
                                                    <label for="lastName">No of bedrooms</label>
                                                    <input type="text" class="form-control" placeholder="Last name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group py-2">
                                            <label for="lastName">Budget</label>
                                            <input type="text" class="form-control" id="lastName"/>
                                        </div>
                                        <div class="form-group py-2">
                                            <div class="row">
                                                <div class="col">
                                                    <label for="state">State</label>
                                                    <select name="state" id="" class="form-control">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="col">
                                                    <label for="locality">Locality</label>
                                                    <select name="locality" id="" class="form-control">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group py-2">
                                            <label for="email">Account Type</label>
                                            <div class="form-inline">
                                                <div class="custom-control custom-checkbox form-in py-2 px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="individual"/>
                                                    <label class=" custom-control-label " for="individual">Individual</label>
                                                </div>

                                                <div class="custom-control custom-checkbox py-2 px-4">
                                                    <input type="checkbox" class="custom-control-input px-1" id="agent"/>
                                                    <label class=" custom-control-label " for="agent">Estate Agent</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="form-group py-2">
                                            <label for="name">Name</label>
                                            <input type="text" class="form-control" id="name"/>
                                        </div>
                                        <div class="form-group py-2">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email"/>
                                        </div>
                                        <div class="form-group py-2">
                                            <label for="comment">Comments</label>
                                            <textarea name="comment" id="comment" rows="8" class="form-control"></textarea>
                                        </div>
                                        <div class="row my-4">
                                            <p class="col-sm-12 text-small"><i class="fa fa-asterisk text-danger"></i>By submitting you are agree that all data can be displayed on our website</p>
                                        </div>
                                        <div class="row my-3 ">
                                            <div class="col-sm-12 ">
                                                <button class="btn btn-block text-white" style={{background:"#FF8C00"}}>Send Request</button>
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