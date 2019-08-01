import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import config from '../../config'
import  Header from "../../component/Header/UserHeader"
import UserDashboardSideBar from './UserDashboardSideBar'

class SavedProperties extends Component {
    constructor(props){
        super(props)
        this.state = {
            savedProperties: [

            ]
        }
        this.getSavedProperties = this.getSavedProperties.bind(this)
    }
    async componentWillMount(){
        var token = localStorage.getItem('token')
        await this.getSavedProperties(`Bearer `+token)
    }
    async getSavedProperties(token){
        const res = await fetch(`${config.BASE_URL}/saved_properties`,{
            headers:{
                'Authorization':token
            },
            method:'GET'
        })
        const payload = await res.json();
        if (res.status === 200 && payload.status === 1){
            this.setState({
                savedProperties: payload.data.data
            })
        }else{
            alert('Something went wrong')
        }
    }
    render() {
        var noSavedProperties = "You have not saved any properties yet"
        var savedProperties = this.state.savedProperties.map((item)=> {
            return <div className="row px-3 py-3 bg-white" key={item.id}>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-8 col-lg-8 px-0 py-0">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="col-sm-4 col-lg-4 px-0 py-0">
                            <img src={item.image} alt=""/>
                            <img src={item.image} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 px-0 py-0 border-bottum">
                    <div className="col-sm-12 py-2 px-2">
                        <h5>{item.title}</h5>
                        <span className="text-small"> 4 Bedroom | 3 Bathroom | 4 Toilet | 2 Parking</span>
                        <h6 className="px-0 py-0">Ajah</h6>
                        <span>
                            {item.description}
                        </span>
                        <button className="btn btn-dark btn-listing">N {item.price}</button>
                        <div className="row py-1">
                            <div className="col-sm-8 col-lg-8">
                                <span>{item.created_at}</span>
                            </div>
                            <div className="col-sm-2 col-lg-2">
                                <i className="fa fa-share"></i>
                            </div>
                            <div className="col-sm-2 col-lg-2">
                                <i className="fa fa-heart-o"></i>
                            </div>
                        </div>
                        <hr className="mx-0 py-0 my-0"/>
                        <div className="row">
                            <div className="col-sm-3"><img src={item.image} className="img rounded-circle" alt=""/></div>
                            <div className="col-sm-9">
                                <span>{item.agent.name}</span>
                                <div className="d-flex justify-content-between">
                                    <span>{item.agent.phone}</span>
                                    <span>View listing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
        return ( 
            <React.Fragment>
                <Header />
                <section className="container-fluid properties py-5 bg-grey">
                    <div className="container">
                        <div className="col-sm-11 offset-sm-1">
                            <div className="row profile">
                                <UserDashboardSideBar active="savedProperties"/>
                                <div className="col-md-9">
                                    {this.state.savedProperties.length < 1 ? noSavedProperties: savedProperties}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default SavedProperties;
