import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import config from '../../config'
import Header from "../../component/Header/UserHeader"
import SubHeader from "../../component/Header/SubHeader"


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            username:"",
            email:"",
            address:"",
            oldpassword:"",
            newpassword:"",
            user:{}
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.update = this.update.bind(this)
        this.setUserState = this.setUserState.bind(this)
    }
    componentDidMount() {
        var token = localStorage.getItem('token')
        this.getUser(token)
        this.setUserState()
    }
    setUserState(){
        let user = JSON.parse(localStorage.getItem('user')) 
        this.setState({user:user})
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
                            <div className="col-md-3">
                                <div className="profile-sidebar">
                                    <div className="profile-usermenu">
                                        <h3 className="px-3 pb-3" style={{
                                            borderBottom:"1px solid #f0f4f7"
                                        }}>My Account</h3>
                                        <ul>
                                            <li className="py-3 active">
                                                <Link to='/user'>
                                                    <a className="py-3 px-5"> Saved Properties</a>
                                                </Link>
                                            </li>
                                            <li className="py-2" >
                                                <Link to='/alerts'>
                                                    <a className="py-3 px-5"> Alert </a>
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <Link to='/profile'>
                                                    <a className="py-3 px-5"> Profile </a>
                                                </Link>
                                            </li>
                                            <li className="py-2">
                                                <a onClick={this.logout}className="py-3 px-5">Logout </a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
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
                                                </div>
                                            </div>
                                            <div className="form-group py-2">
                                                <label for="address">House Address</label>
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
            </React.Fragment>
        )
    }
}

export default Profile;