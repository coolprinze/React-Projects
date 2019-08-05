import React, { Component, Fragment } from 'react';
// import './App.css';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {getGlobal} from 'reactn';
import NotFound from './views/NotFound'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Reports from './views/Reports'
import Report from './views/Report'
import Agents from './views/Agents'
import Users from './views/Users'
import Listings from './views/Listings'
import Requests from './views/Requests'
import Auth from './utils/auth';
let auth = new Auth();

class App extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <Router>
        <Fragment>
        
          <Route exact path="/" render={() => (auth.isAuthenticated ? <Dashboard /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/reports/:id" component={Report} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/notfound" component={NotFound} />
        </Fragment>
      </Router>
    )

  }

}

export default App;