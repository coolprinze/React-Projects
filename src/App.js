import React, { Component, Fragment } from 'react';
// import './App.css';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { getGlobal } from 'reactn';
import NotFound from './views/NotFound'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Reports from './views/Reports'
import Report from './views/Report'
import Agents from './views/Agents'
import Agent from './views/Agent'
import Users from './views/Users'
import Listings from './views/Listings'
import Requests from './views/Requests'
import Newsletter from './views/Newsletter'
import Subscribers from './views/Subscribers'
import Auth from './utils/auth';
import API from './utils/api';

let auth = new Auth();
let api = new API();
class App extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    let data = await api.getAgents();
    await api.getProperties();
    await api.getSubscribers();
    await api.getUsers();
    await api.getReports();
    await api.getRequests();
    await this.setState({ data });
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={() => (auth.isAuthenticated() ? <Dashboard /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/login" render={() => (!auth.isAuthenticated() ? <Login /> : <Redirect to={{ pathname: "/" }} />)} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/reports/:id" component={Report} />
          <Route exact path="/agents/:id" component={Agent} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route exact path="/subscribers" component={Subscribers} />
          <Route exact path="/notfound" component={NotFound} />
        </Fragment>
      </Router>
    )

  }

}

export default App;