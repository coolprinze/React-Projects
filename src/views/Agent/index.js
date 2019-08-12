import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'


// import all pages components
import Dashboard from './Dashboard'
import AgentListing from '../Agent/AgentListing';
import Agents from '../Admin/Agents';
import PropertyAdvice from './PropertyAdvice'
import Profile from './Profile'
import AddProperty from './AddProperty';
import AgentListingStats from './AgentListingStats';
import { createMsg } from '../../actions';
import Loading from '../../component/Loading';




class Agent extends Component {

  

    render() {

      if(this.props.isAuthenticated){
        if (this.props.user.role.id === 1){
          return (() => {
            this.props.createMsg("Restricted: Sorry you are not an agent", false);
            return <Redirect to="/user" />
          })()
        }
        return ( 
          <div>
            <main className={`${this.props.pageLoading? 'd-none' : ''}`}>
              <Switch>
                <Route exact path="/agent" component={Dashboard} />
                <Route exact path="/agent/listing-statistics" component={AgentListingStats} />
                <Route exact path="/agent/profile" component={Profile} />
                <Route exact path="/agent/agent-listing" component={AgentListing} />  
                <Route exact path="/agent/add-property" component={AddProperty} />
                <Route exact path="/agent/edit-property/:slug" component={AddProperty} />
                <Route exact path="/propertyadvice" component={PropertyAdvice}/>
                <Route exact path="/agents" component={Agents} />
              </Switch>
            </main>          
          </div>
        )
      }

      return (<Redirect to="/login" />)



    }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  pageLoading: state.utility.pageLoading
})

export default connect(mapStateToProps, { createMsg })(Agent);