import React, { Component } from 'react';
import UserDashboardSideBar from './UserDashboardSideBar'
import PropertyView from '../../component/PropertyView';
import { connect } from 'react-redux'
import { getSavedProperties } from '../../actions';


class SavedProperties extends Component {
    async componentWillMount(){
        await this.props.getSavedProperties()
    }

    render() {
        var noSavedProperties = "You have not saved any properties yet"
        var savedProperties = this.props.savedProperties.map((item)=> {
            return <PropertyView user={this.props.user} data={item} />
        })
        return ( 
            <React.Fragment>
                <section className="container-fluid properties bg-grey">
                    <div className="container py-5">
                        <div className="col-sm-12">
                            <div className="row profile">
                                <UserDashboardSideBar savedProperties />
                                <div className="col-md-9">
                                    {this.props.savedProperties.length < 1 ? noSavedProperties: savedProperties}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
const mapStateToProp = state => ({
    user: state.auth.user,
    savedProperties: state.property.listings,
})

export default connect(mapStateToProp, {getSavedProperties})(SavedProperties);
