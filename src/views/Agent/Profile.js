import React, { Component } from 'react';
import Header from "../../component/Header/UserHeader"


class Profile extends Component {

    componentDidMount() {

    }

    render() {
        return ( 
            <React.Fragment>
                <Header />
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="row bg-dark px-3 py-3 text-white nav-pills">
                            <div className="col-sm-3">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#editDetails" role="tab" aria-controls="v-pills-home" aria-selected="true">Edit Details</a>
                            </div>
                            <div className="col-sm-3 text-muted">
                                <a className="nav-link" id="v-pills-edit-tab" data-toggle="pill" href="#companyLogo" role="tab" aria-controls="v-pills-home" aria-selected="true">Company Logo</a>
                            </div>
                            <div className="col-sm-3">
                                <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#password" role="tab" aria-controls="v-pills-home" aria-selected="true">Password</a>
                            </div>
                        </div>
                        <div className="row bg-white px-3 py-3 tab-content" id="v-pills-tabContent">
                            <div className="col-sm-12 tab-pane fade show active" id="editDetails" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="firstName">Name</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="James"/>
                                        </div>
                                        <div className="col">
                                            <label for="lastName">Company Name</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="Agbalumo"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label for="address">House Address</label>
                                    <input type="text" className="form-control form-control-lg bg-white" id="address" value="28, King Okorodudu Street Surulere Lagos"/>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">Country</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Email Address</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="jamesagbalumo@gmail.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">Mobile No</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Whatsapp No</label>
                                            <input type="text" className="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label for="address">About Us</label>
                                    <textarea name="about" className="form-control form-control-lg bg-white" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form-group py-2">
                                    <button className="btn bg-orange px-5 pull-right text-white">Save changes</button>
                                </div>
                            </div>
                            <div className="col-sm-12 tab-pane fade show" id="companyLogo" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col-sm-4 offset-sm-2">
                                            <div className="card bg-grey d-flex align-items-center py-5">
                                                <img src="../img/logo.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <label for="email">Change company logo</label>
                                            <input type="file" className="form-control form-control-lg bg-white"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-5">
                                    <button className="btn bg-orange px-5 pull-right text-white">Save changes</button>
                                </div>
                            </div>
                            <div className="col-sm-12 tab-pane fade show" id="password" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group py-2">
                                    <label for="address">Old Password</label>
                                    <input type="password" className="form-control form-control-lg bg-white" id="address" value=""/>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">New Password</label>
                                            <input type="password" className="form-control form-control-lg bg-white" value=""/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Confirm New Password</label>
                                            <input type="password" className="form-control form-control-lg bg-white" value=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-5">
                                    <button className="btn bg-orange px-5 pull-right text-white">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Profile;