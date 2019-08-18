import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubHeader from '../../component/Header/SubHeader'
import UserDashboardSideBar from './UserDashboardSideBar';
import { getSavedProperties, getUser, loadPage } from '../../actions';
import PropertyView from '../../component/PropertyView';
import config from '../../config';

class Dashboard extends Component {
    constructor(props){
      super(props)
      this.props.user === null?
      (async () => {
        await this.props.getSavedProperties()
        await this.props.getUser();
        await this.props.loadPage()
      })():
      (async () =>{
        await this.props.getSavedProperties()
        await this.props.loadPage()
      })()
    }

    async componentDidMount(){
        document.title = await `${config.pageTitle} User Dashboard`;
    }

    render() {
        const noSavedProperties = "You have not saved any properties yet";
        const savedProperties = this.props.savedProperties.data.map((property)=>
            <PropertyView key={property.id} user={this.props.user} data={property} />
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

export default connect(mapStateToProps, { getSavedProperties, getUser, loadPage })(Dashboard);
