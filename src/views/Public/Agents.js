import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAgents, loadPage, getPaginatePage } from '../../actions';
import Paginate from '../../component/Paginate';
import SearchBar from '../../component/SearchBar';
import SideBar from '../../component/SideBar';
import { GET_AGENTS } from '../../actions/types';

class Agents extends Component {

    async componentDidMount() {
        await this.props.getAgents();
        await this.props.loadPage();
    }


    renderAgents = () => this.props.agents.total? this.props.agents.data.map(agent => 
        <div className="row pb-2 border-bb">
            <div className="col-sm-9 px-0">
                <li className="d-flex justify-content-start align-items-center py-2">
                    <img src={agent} className="img rounded-circle" width="40px" height="40px" alt="" />
                    <span className="ml-3"> <h4 className="mb-0">{agent.name}</h4></span>
                </li>
                <li className="d-flex justify-content-start align-items-center mx-2">
                    <div className="px-1"><i className="fa fa-2x fa-map-marker"></i></div>
                    <span className="pl-4">{agent.address}</span>
                </li>
            </div>
            <div className="col-sm-3 mt-4 pt-0 px-0">
                <Link className="btn btn-sm btn-dark pull-right" to={`/${agent.id}/properties`}> View Listing</Link>
            </div>
        </div>

    ): <div>There are no agent yet</div>

  render() {
    return (
      <Fragment>
          
        <header className="container-fluid px-0">
            <div className="container text-center headerContent">
                <h4 className="text-white">Agents Listing</h4>
            </div>
            <div className="container-fluid search-bar d-flex align-items-center">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12 px-0 py-3">
                                <input type="text" className="form-control" placeholder="Search for agents using location or name" style={{ color: '#f0f0f0' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="container-fluid mt-5 properties">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-lg-sm-8 bg-white py-4 px-5" style={{ borderRadius: "10px" }}>
                        {this.renderAgents()}
                    </div>
                    <SideBar />
                </div>
            </div>
        </section>
    
        <Paginate type={GET_AGENTS} onClick={this.props.getPaginatePage} data={this.props.agents} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    agents: state.agent.agents,
    requestType: state.agent.agents.requestType,
})

export default connect(mapStateToProps, { getAgents, loadPage, getPaginatePage })(Agents)
