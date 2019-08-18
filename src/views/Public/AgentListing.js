import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadPage, getPaginatePage, getAgentListing } from '../../actions';
import Paginate from '../../component/Paginate';
import PropertyView from '../../component/PropertyView';
import { UNLOAD_PAGE, GET_PROPERTIES } from '../../actions/types';
import SideBar from '../../component/SideBar';
import { property } from '../../assets/img';
import config from '../../config';

class AgentListing extends Component {
    state={
        agentId: ''
    }
    
    async componentDidMount(){
        document.title = await `${config.pageTitle} Agent Listing`;
        await this.setState({ agentId: this.props.match.params.id })
        await this.getProperties();
        await this.props.loadPage();
    }
    
    // async componentDidUpdate(){
    //     this.id = this.props.match.params.id
    //     await this.search();
    //     await this.props.loadPage();
    // }

    componentWillUnmount(){
        this.props.loadPage(UNLOAD_PAGE);
    }
    
    getProperties = async () => {
        await this.props.getAgentListing(this.state.agentId);        
    }
    render() {
        const { data } = this.props.properties
        const properties = data.length?
        data.map((item) =>{
            return (
                <PropertyView  key={item.id}  data={item} />
            )
        }): <div>There are no listing for your request</div>
      return ( 
        <div>
            <div className="container-fluid search-bar d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-1 px-0 py-3">
                                <img src={property} className="img rounded-circle responsive" width="80px" height="80px" alt="" />
                            </div>
                            <div className="col-sm-11 py-3 px-0">
                                <ul>
                                    <li className="text-white">
                                        <h4 className="text-white">Elias and Develper Homes</h4>
                                    </li>
                                    <li className="text-white" style={{ fontSize: '1rem' }}>
                                        <span className="fa fa-map-marker pr-3" style={{ fontSize: '1.4rem' }}></span> 285A Corperation Drive, Doliphin Estate, Ikoyi
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container-fluid properties py-5" style={{background: '#FAFAFA'}}>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-8">
                        {properties}
                        </div>
                        <SideBar />
                    </div>
                </div>
            </section>
            <Paginate type={GET_PROPERTIES} onClick={this.props.getPaginatePage} data={this.props.properties} />             
        
        </div>
        )

    }

}

const mapStateToProps = state => ({
    properties: state.agent.listings,
})

export default connect(mapStateToProps, { getAgentListing, loadPage, getPaginatePage })(AgentListing);