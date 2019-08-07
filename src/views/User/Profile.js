import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../config'
import Header from "../../component/Header/UserHeader"
import SubHeader from "../../component/Header/SubHeader"
import Footer from '../../component/Footer';
import UserDashboardSideBar from './UserDashboardSideBar';


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.user.name,
            username: this.props.user.username,
            email:this.props.user.email,
            address:this.props.user.address,
            oldpassword:"",
            newpassword:"",
            user:{}
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.update = this.update.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        console.log(e.target.value)
    }

    update(){
        var t = localStorage.getItem('token')
        this.updateProfile(`Bearer `+t)
    }
    updateProfile = async (token) => {
        var data = {
            name:this.state.name,
            username:this.state.username,
            address:this.state.address,
            country_id:160,
            state_id:25,
            phone: "12345678901"
        }
        console.log(JSON.stringify(data))
        const res = await fetch(`${config.BASE_URL}/user`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization': token
            },
            method:'POST',
            body: JSON.stringify(data)
        })
        const payload = await res.json();
        if (payload.status === 1){
            alert('Update successful')
        }else{
            alert('Something went wrong')
        }
    }
    render() {
        return ( 
            <React.Fragment>
                <Header />
                <SubHeader username={this.state.user.name}/>
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                            
                                <UserDashboardSideBar profile />

                                <div className="col-md-9">
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 bg-dark pt-4">
                                            <h6 className="text-white">Name:</h6>
                                            <h3 className="text-white">{this.state.name} | {this.state.username}</h3>
                                        </div>
                                    </div>
                                    <div className="row mx-0 my-0 bg-white">
                                        <div className="col-sm-12">
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label htmlFor="firstName">Full Name</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" id="name" onChange={this.handleChange} value={this.state.name}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label htmlFor="email">Email Address</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" id="email" onChange={this.handleChange} value={this.state.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group py-2">
                                                <label htmlFor="address">House Address</label>
                                                <input type="text" className="form-control form-control-lg bg-white" id="address" onChange={this.handleChange} value={this.state.address}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 py-3 bg-white">
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col d-flex justify-content-end">
                                                        <button className="btn btn-lg" onClick={this.update} style={{background:"#FF8C00"}}>Save Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>          
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Profile);