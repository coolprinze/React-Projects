import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'
import AgentListing from '../Agent/AgentListing';
import Agents from '../Admin/Agents';
import PropertyAdvice from './PropertyAdvice'
import Profile from './Profile'
import AddProperty from './AddProperty';




class Agent extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
        <div>
          <main>
            <Switch>
              <Route exact path="/agent" component={Dashboard} />
              <Route exact path="/agent/profile" component={Profile} />
              <Route exact path="/agent/agent-listing" component={AgentListing} />  
              <Route exact path="/agent/add-property" component={AddProperty} />
              <Route exact path="/propertyadvice" component={PropertyAdvice}/>
              <Route exact path="/agents" component={Agents} />
            </Switch>
          </main>          
        </div>
      )

    }

}

export default Agent;