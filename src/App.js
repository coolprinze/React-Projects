import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// all main layout
import Admin from './views/Admin'
import Agent from './views/Agent'
import User from './views/User'
import Dashboard from './views/Admin/Dashboard'
import Agents from './views/Agent/AgentListing'
import NotFound from './views/NotFound'
import PropertyListing from './views/Public/PropertyListing'
import PropertyDetails from './views/Public/PropertyDetails'
import SearchResult from './views/Public/SearchResult'
import Register from './views/Public/Register'
import Login from './views/Public/Login'
import Home from './views/Public/Home'
import Header from './component/Header/Header'
import Footer from './component/Footer'

class App extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <Router>
        <Fragment>
        {/* <div> */}
          {/* <Header/> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/propertylisting" component={PropertyListing} />
          <Route exact path="/propertylisting/:id" component={PropertyDetails} />
          <Route exact path="/search" component={SearchResult} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Footer/>         
        {/* </div> */}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/agent" component={Agent} />
          <Route exact path="/user" component={User} />
         
          {/* <Route exact path="/login" component={Public} /> */}
          {/* "/user/savedproperties" also serves as the dashboard after user login login */}
          {/* <Route exact path="/alerts" component={User} />
          <Route exact path="/profile" component={User} />
          <Route exact path="/post-request" component={User} />
          <Route exact path="/agent/profile" component={Agent} />
          <Route exact path="/agent/agent-listing" component={Agent} />
          <Route exact path="/propertyadvice" component={Agent} />
          <Route exact path="/agent/add-property" component={Agent} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/" component={Public} />
          <Route exact path="/search" component={Public} />
          <Route exact path="/postrequest" component={Public} />
          <Route exact path="/propertylisting" component={Public} />
          <Route exact path="/propertylisting/:slug" component={Public} /> */}
          <Route exact path="/notfound" component={NotFound} />
          {/* <Route  component={NotFound} /> */}
        </Fragment>
      </Router>
    )

  }

}

export default App;