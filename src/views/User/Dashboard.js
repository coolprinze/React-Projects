import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Header from "../../component/Header/UserHeader"
import SubHeader from '../../component/Header/SubHeader'
import Footer from '../../component/Footer';
import UserDashboardSideBar from './UserDashboardSideBar';
import { getSavedProperties, getUser } from '../../actions';

class Dashboard extends Component {
    constructor(props){
      super(props)
      this.props.user === null?
      (async () => {
        await this.props.getSavedProperties()
        await this.props.getUser();
      })():
      (async () =>{
        await this.props.getSavedProperties()
      })()
    }

    render() {
        const noSavedProperties = "You have not saved any properties yet";
        const savedProperties = this.props.savedProperties.data.map((property)=>
            <div className="row px-3 py-3 bg-white" key={property.id}>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-8 col-lg-8 px-0 py-0">
                            <img src={property.image} alt=""/>
                        </div>
                        <div className="col-sm-4 col-lg-4 px-0 py-0">
                            <img src={property.image} alt=""/>
                            <img src={property.image} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 px-0 py-0 border-bottum">
                    <div className="col-sm-12 py-2 px-2">
                        <h5>{property.title}</h5>
                        <span className="text-small"> 4 Bedroom | 3 Bathroom | 4 Toilet | 2 Parking</span>
                        <h6 className="px-0 py-0">Ajah</h6>
                        <span>
                            {property.description}
                        </span>
                        <button className="btn btn-dark btn-listing">N {property.price}</button>
                        <div className="row py-1">
                            <div className="col-sm-8 col-lg-8">
                                <span>{property.created_at}</span>
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
                            <div className="col-sm-3"><img src={property.image} className="img rounded-circle" alt=""/></div>
                            <div className="col-sm-9">
                                {/* <span>{property.agent.name}</span> */}
                                <div className="d-flex justify-content-between">
                                    <span>{property.agent.phone}</span>
                                    <span>View listing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return ( 
            <React.Fragment>
                <SubHeader username={this.props.user.name}/>
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                                <UserDashboardSideBar savedProperties />
                                <div className="col-md-9">
                                    {this.props.savedProperties.data.length < 1 ? noSavedProperties: savedProperties}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    savedProperties: state.properties.listings,
    user: state.auth.user
})

export default connect(mapStateToProps, { getSavedProperties, getUser })(Dashboard);
