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
import About from './About';
import Agents from './Agents';
import AdviceCategories from './AdviceCategories';
import AdviceCategory from './AdviceCategory';
import Advice from './Advice';




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
              <Route exact path="/propertyadvice-categories" component={AdviceCategories} />
              <Route exact path="/propertyadvice/:category" component={AdviceCategory} />
              <Route exact path="/propertyadvice/:category/:advice" component={Advice} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/postrequest" component={PostRequest}/>
              <Route exact path="/propertylisting" component={PropertyListing} />
              <Route exact path="/propertylisting/:slug" component={PropertyDetails} />
              <Route exact path="/search" component={SearchResult} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/agents" component={Agents} />
            </Switch>
          </main> 
          <Footer/>         
        </div>
      )

    }

}

export default Admin;