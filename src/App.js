import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// all main layout
import Admin from './views/Admin'
import Agent from './views/Agent'
import User from './views/User'
import Public from './views/Public'
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
                    <Route exact path="/" component={Public} />
                    <Route exact path="/propertylisting" component={Public} />
                    {/* <Route  component={NotFound} /> */}
                </Fragment>
            </Router>
        )

    }

}

export default App;