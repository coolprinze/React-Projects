import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'
import Profile from './Profile';
import PostRequest from './PostRequest'
import SavedProperties from './SavedProperties'
import Alerts from './Alerts';





class User extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
        <div>
          <main>
            <Switch>
              <Route exact path="/user" component={Dashboard}/>
              <Route exact path="/alerts" component={Alerts}/>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/post-request" component={PostRequest} /> 
            </Switch>
          </main>          
        </div>
      )

    }

}

export default User;