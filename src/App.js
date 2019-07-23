import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// all main layout
import Admin from './views/Admin'
import Agent from './views/Agent'
import User from './views/User'
import Public from './views/Public'
import Agents from './views/Agent/AgentListing'
import NotFound from './views/NotFound'

class App extends Component {

    componentDidMount() {

    }

    render() {

        return ( 
            <Router>
                <Fragment>
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/agent" component={Agent} />
                    <Route exact path="/user" component={User} /> 
                    <Route exact path="/user/register" component={User} />   
                    <Route exact path="/user/login" component={User} /> 
                    <Route exact path="/user/profile" component={User} /> 
                    <Route exact path="/user/post-request" component={User} /> 
                    <Route exact path="/agent/profile" component={Agent} />
                    <Route exact path="/agent/agent-listing" component={Agent} />
                    <Route exact path="/propertyadvice" component={Agent} />
                    <Route exact path="/agents" component={Agents} /> 
                    <Route exact path="/" component={Public} />
                    <Route exact path="/postrequest" component={Public} />
                    <Route exact path="/propertylisting" component={Public} />
                    <Route exact path="/propertylisting/:slug" component={Public} />
                    <Route exact path="/notfound" component={NotFound} />
                    {/* <Route  component={NotFound} /> */}
                </Fragment>
            </Router>
        )

    }

}

export default App;