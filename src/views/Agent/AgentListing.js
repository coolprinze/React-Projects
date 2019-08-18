import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAgentProperties, deleteProperty, loadPage, getPaginatePage } from '../../actions';
import Paginate from '../../component/Paginate';
import PropertyView from '../../component/PropertyView';
import { GET_PROPERTIES } from '../../actions/types';
import SideBar from '../../component/SideBar';
import config from '../../config';




class AgentListing extends Component {
    constructor(props){
        super(props)
        this.getAgentProperties()
        this.onDelete = this.deleteListing.bind(this)
    }

    async componentDidMount(){
        document.title = await `${config.pageTitle} My Listing`;
    }

    getAgentProperties = async () => {
        await this.props.getAgentProperties();
        await this.props.loadPage();

    }

    deleteListing = async (id) => {
        if (window.confirm("Are you sure you want to delete this listing?")){
            await this.props.deleteProperty(id)
        }
    }
    renderProperties = () => this.props.properties.data.length?
    this.props.properties.map((item) =>
            <p>Hello</p>
        )
    : <p>You Have no listging at the moment</p>
    
    
    
    render() {
        const { data } = this.props.properties
        const properties = data.length?
        data.map((item) =>{
            return (
                <PropertyView  key={item.id}  data={item} />
            )
        }): <p>You Have no listging at the moment</p>
        return ( 
            <React.Fragment>
                    <section className="container-fluid properties bg-grey py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {properties}
                            </div>
                            
                            <SideBar />
                        </div>
                    </div>
                </section>
                    <Paginate type={GET_PROPERTIES} onClick={this.props.getPaginatePage} data={this.props.properties} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.agent.listings
})

export default connect(mapStateToProps, { getAgentProperties, deleteProperty, loadPage, getPaginatePage })(AgentListing);


