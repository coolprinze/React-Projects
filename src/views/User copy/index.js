import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'



class Admin extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
        <div>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </main>          
        </div>
      )

    }

}

export default Admin;