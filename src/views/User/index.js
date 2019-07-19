import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Dashboard from './Dashboard'



class User extends Component {

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
              <Link to="/user">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <main>
            <Switch>
              <Route exact path="/user" component={Dashboard} />
            </Switch>
          </main>          
        </div>
      )

    }

}

export default User;