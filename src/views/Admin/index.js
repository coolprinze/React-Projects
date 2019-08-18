import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

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
              <Route exact path="/admin" component={Dashboard} />
            </Switch>
          </main>          
        </div>
      )

    }

}

export default Admin;