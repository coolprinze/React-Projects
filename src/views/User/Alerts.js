import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import config from '../../config'
import  Header from "../../component/Header/UserHeader"
import SubHeader from "../../component/Header/SubHeader"
import UserDashboardSideBar from './UserDashboardSideBar'
import deleteIcon from '../Agent/agent-listing-images/img/icon/delete.png'
import bellIcon from '../Agent/agent-listing-images/img/icon/bell-sm.png'

class Alerts extends Component {
    constructor(props){
        super(props)
        this.state = {
            alerts: [

            ]
        }
        this.getAlerts = this.getAlerts.bind(this)
    }
    async componentWillMount(){
        var token = localStorage.getItem('token')
        await this.getAlerts(`Bearer `+token)
    }
    async getAlerts(token){
        const res = await fetch(`${config.BASE_URL}/alerts`,{
            headers:{
                'Authorization':token
            },
            method:'GET'
        })
        const payload = await res.json();
        if (res.status === 200 && payload.status === 1){
            this.setState({
                alerts: payload.data.data
            })
        }else{
            alert('Something went wrong')
        }
    }
    render() {
        var noAlerts = "No Alerts"
        var alerts = this.state.alerts.map((item)=> {
            return (
                <tr key={item.id}>
                    <td><a>Properties in Lagos</a></td>
                    <td> <img src={bellIcon} alt="" class="mr-2"/> Instantly</td>
                    <td><img src={deleteIcon} alt=""/></td>
                </tr>
            ) 
        })
        return ( 
            <React.Fragment>
                <Header />
                <SubHeader username="Daniel"/>
                <section className="container-fluid properties py-5 bg-grey">
                    <div className="container">
                        <div className="col-sm-11 offset-sm-1">
                            <div className="row profile">
                                <UserDashboardSideBar active="alert"/>
                                <div className="col-md-9">
                                    {/* {this.state.savedProperties.length < 1 ? noSavedProperties: savedProperties} */}
                                        <div class="row mx-0 my-0 bg-white" style={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.07)",borderRadius:"10px"}}>
                                            <div class="col-sm-12 px-0 d-flex flex-column" style={{minHeight:"569px"}}>
                                                <table class="table p-2" style={{width:"100%"}}>
                                                <thead class="bg-grey" style={{border:"none"}}>
                                                    <tr>
                                                        <th scope="col" style={{border:"none"}}>Search</th>
                                                        <th scope="col" style={{border:"none"}}>Action</th>
                                                        <th scope="col" style={{border:"none"}}>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <tr>
                                                        <td><a href="propertyview.html">Properties in Lagos</a></td>
                                                        <td> <img src={bellIcon} alt="" class="mr-2"/> Instantly</td>
                                                        <td><img src={deleteIcon} alt=""/></td>
                                                    </tr> */}
                                                    {alerts.length < 1 ? noAlerts : alerts}
                                                </tbody>
                                            </table>
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

export default Alerts;

// sample data
// {
//     "id": 54500,
//     "agent": {
//     "id": 3500,
//     "name": "Adam Matthew",
//     "phone": null,
//     "username": "example"
//     },
//     "title": "Lekki house centre update",
//     "slug": "lekki-house-centre-update",
//     "price": 4000000,
//     "description": "Get All Files Within A Directory\nThe files method returns an array of all of the files in a given directory. If you would like to retrieve a list of a...",
//     "status": "For Sale",
//     "type": "Apartment",
//     "featured": false,
//     "label": "",
//     "image": "http://127.0.0.1:8000/storage/properties/iSA5dVqJprmPh31U3R3OGM5GbDtNe5R2WGk15tt7.jpeg",
//     "bedrooms": 2,
//     "bathrooms": 2,
//     "toilets": null,
//     "furnished": false,
//     "serviced": false,
// "parking": 2,
// "total_area": 16,
// "country": "Nigeria",
// "locality": "Agege",
// "address": "inside inside",
// "created_at": "1 hour ago"
// }