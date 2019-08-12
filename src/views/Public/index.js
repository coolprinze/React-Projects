import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

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
import Advertise from './Advertise';
import Magazine from './Magazine';
import CityListing from './CityListing';




class Public extends Component {


    render() {

      return ( 
        <div>
          <Header user={this.props.user}/>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/propertyadvice-categories" component={AdviceCategories} />
              <Route exact path="/propertyadvice/:category" component={AdviceCategory} />
              <Route exact path="/propertyadvice/:category/:advice" component={Advice} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/download-magazine" component={Magazine} />
              <Route exact path="/advertise-with-us" component={Advertise} />
              <Route exact path="/postrequest" component={PostRequest}/>
              <Route exact path="/propertylisting" component={PropertyListing} />
              <Route exact path="/city/:id" component={CityListing} />
              <Route exact path="/search" component={SearchResult} />
              <Route exact path="/properties/:area" component={SearchResult} />

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

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Public);