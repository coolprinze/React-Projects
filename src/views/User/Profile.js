import React, { Component } from 'react';
import config from '../../config'
import UserDashboardSideBar from './UserDashboardSideBar'
import Header from "../../component/Header/UserHeader"


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            username:"",
            email:"",
            address:"",
            oldpassword:"",
            newpassword:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.update = this.update.bind(this)
    }
    componentDidMount() {
        var token = localStorage.getItem('token')
        this.getUser(token)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        console.log(e.target.value)
    }
    getUser = async (token) => {
        const res = await fetch(`${config.BASE_URL}/user`,{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ` +token
            },
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                name: payload.data.name,
                email:payload.data.email,
                address:payload.data.address,
                username:payload.data.username
            })
        }else{
            alert('Something went wrong')
        }
    }
    update(){
        var token = localStorage.getItem('token')
        this.updateProfile(`Bearer `+token)
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
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                                <UserDashboardSideBar active="savedProperties"/>    
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
                                                        <label for="firstName">Full Name</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" id="name" onChange={this.handleChange} value={this.state.name}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="email">Email Address</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" id="email" onChange={this.handleChange} value={this.state.email}/>
                                                    </div>
                                                    {/* <div className="col">
                                                        <label for="mobileno">Mobile No.</label>
                                                        <input type="text" className="form-control form-control-lg bg-white" value="08023345678"/>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="form-group py-2">
                                                <label for="address">House Address</label>
                                                <input type="text" className="form-control form-control-lg bg-white" id="address" onChange={this.handleChange} value={this.state.address}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row mx-0 my-0">
                                        <div className="col-sm-12 py-3">
                                            <h6>Change Password</h6>
                                        </div>
                                    </div> */}
                                    <div className="row mx-0 my-0">
                                        <div className="col-sm-12 py-3 bg-white">
                                            {/* <div className="form-group pt-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="oldpassword">Old Password</label>
                                                        <input type="password" className="form-control form-control-lg bg-white" id="oldpassword" onChange={this.handleChange} value={this.state.oldpassword}/>
                                                    </div>
                                                    <div className="col">
                                                        <label for="newpassword">New Password</label>
                                                        <input type="password" className="form-control form-control-lg bg-white"  id="newpassword" onChange={this.handleChange} value={this.state.newpasssword}/>
                                                    </div>
                                                </div>
                                            </div> */}
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
            </React.Fragment>
        )
    }
}

export default Profile;