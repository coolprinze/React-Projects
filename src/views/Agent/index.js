import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'
import PostRequest from '../User/PostRequest';
import AgentListing from '../Agent/AgentListing';
import Agents from '../Admin/Agents';



class Agent extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
        <div>
          <main>
            <Switch>
              <Route exact path="/agent" component={Dashboard} />
              <Route exact path="/agent/agent-listing" component={AgentListing} />  
              <Route exact path="/agents" component={Agents} />
            </Switch>
          </main>          
        </div>
      )

    }

}

export default Agent;