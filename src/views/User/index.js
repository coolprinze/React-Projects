import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'
import Register from './Register';
import Login from './Login';
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
              <Route exact path="/user" component={Dashboard} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/user/savedproperties" component={SavedProperties}/>
              <Route exact path="/user/alerts" component={Alerts}/>
              <Route exact path="/user/profile" component={Profile} />
              <Route exact path="/user/post-request" component={PostRequest} /> 
            </Switch>
          </main>          
        </div>
      )

    }

}

export default User;