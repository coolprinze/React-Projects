import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

// import all pages components
import Home from './Home'
import PropertyListing from './PropertyListing'
import PropertyDetails from './PropertyDetails'
import Header from './../../component/Header/Header'
import Footer from './../../component/Footer'
import PostRequest from '../User/PostRequest';
import SearchResult from './SearchResult';
import Login from './Login';
import Register from './Register';




class Admin extends Component {

    componentDidMount() {

    }

    render() {

      console.log(this);

      return ( 
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/postrequest" component={PostRequest}/>
              <Route exact path="/propertylisting" component={PropertyListing} />
              <Route exact path="/propertylisting/:id" component={PropertyDetails} />
              <Route exact path="/search" component={SearchResult} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </main> 
          <Footer/>         
        </div>
      )

    }

}

export default Admin;