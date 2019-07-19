import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Home from './Home'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer'



class Admin extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main> 
          <Footer/>         
        </div>
      )

    }

}

export default Admin;