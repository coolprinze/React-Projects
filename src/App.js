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
import AddProperty from './views/AddProperty';

let auth = new Auth();
let api = new API();
class App extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    await api.getAgents();
    await api.getCountries()
    await api.getStates()
    await api.getProperties(100);
    await api.getSubscribers();
    await api.getUsers(100);
    await api.getReports(100);
    await api.getRequests(100);
    await this.setState({  });
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={() => (auth.isAuthenticated() ? <Dashboard /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/login" render={() => (!auth.isAuthenticated() ? <Login /> : <Redirect to={{ pathname: "/" }} />)} />
          <Route exact path="/agents" render={() => (auth.isAuthenticated() ? <Agents /> : <Redirect to={{ pathname: "/login" }} />)}/>
          <Route exact path="/reports" render={() => (auth.isAuthenticated() ? <Reports /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/reports/:id" render={() => (auth.isAuthenticated() ? <Report /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/agents/:id" render={(props) => (auth.isAuthenticated() ? <Agent props={props} /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/property/add" render={(props) => (auth.isAuthenticated() ? <AddProperty props={props} /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/users" render={() => (auth.isAuthenticated() ? <Users /> : <Redirect to={{ pathname: "/login" }} />)} />
          <Route exact path="/requests" render={() => (auth.isAuthenticated() ? <Requests /> : <Redirect to={{ pathname: "/login" }} />)} />
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