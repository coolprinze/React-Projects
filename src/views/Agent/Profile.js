import React, { Component } from 'react';
import { loadPage, getUser } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Input } from '../../common/Form';
import config from '../../config';



class Profile extends Component {

    async componentDidMount() {
        document.title = await `${config.pageTitle} Agent - My Profile`;
        await this.props.getUser()
        await this.props.loadPage()
    }

    render() {
        return ( 
            <React.Fragment>
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="row bg-dark px-3 py-3 text-white nav-pills">
                            <div className="col-sm-3">
                                <Link className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#editDetails" role="tab" aria-controls="v-pills-home" aria-selected="true">Edit Details</Link>
                            </div>
                            <div className="col-sm-3 text-muted">
                                <Link className="nav-link" id="v-pills-edit-tab" data-toggle="pill" to="#companyLogo" role="tab" aria-controls="v-pills-home" aria-selected="true">Company Logo</Link>
                            </div>
                            <div className="col-sm-3">
                                <Link className="nav-link" id="v-pills-home-tab" data-toggle="pill" to="#password" role="tab" aria-controls="v-pills-home" aria-selected="true">Password</Link>
                            </div>
                        </div>
                        <div className="row bg-white px-3 py-3 tab-content" id="v-pills-tabContent">
                            <div className="col-sm-12 tab-pane fade show active" id="editDetails" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="firstName">Name</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="James"/>
                                        </div>
                                        <div className="col">
                                            <label for="lastName">Company Name</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="Agbalumo"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label for="address">House Address</label>
                                    <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" id="address" value="28, King Okorodudu Street Surulere Lagos"/>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">Country</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Email Address</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="jamesagbalumo@gmail.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">Mobile No</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Whatsapp No</label>
                                            <Input  name="" label="" type="text" inputClass="form-control form-control-lg bg-white" value="08023345678"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label for="address">About Us</label>
                                    <textarea name="about" inputClass="form-control form-control-lg bg-white" id="" cols="30" rows="10"></textarea>
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
                                            <Input  name="" label="" type="file" inputClass="form-control form-control-lg bg-white"/>
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
                                    <Input  name="" label="" type="password" inputClass="form-control form-control-lg bg-white" id="address" value=""/>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <label for="mobileno">New Password</label>
                                            <Input  name="" label="" type="password" inputClass="form-control form-control-lg bg-white" value=""/>
                                        </div>
                                        <div className="col">
                                            <label for="email">Confirm New Password</label>
                                            <Input  name="" label="" type="password" inputClass="form-control form-control-lg bg-white" value=""/>
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

export default connect(null, { loadPage, getUser })(Profile);
