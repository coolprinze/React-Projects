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
import { UNLOAD_PAGE } from '../../actions/types';
import { loadPage } from '../../actions';
import Loading from '../../component/Loading';
import SearchListing from './SearchListing';
import AgentListing from './AgentListing';




class Public extends Component {

  async componentWillUnmount(){
      await this.props.loadPage(UNLOAD_PAGE);
  }


    render() {

      return ( 
        <div>
          <div className={`${this.props.loading? '' : 'd-none'}`}>
            <Loading />
          </div>
          <main className={`${this.props.loading? 'd-none' : ''}`}>
            <Header user={this.props.user}/>
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
              <Route exact path="/properties/:param/:id" component={SearchListing} />
              <Route exact path="/search" component={SearchResult} />
              <Route exact path="/properties/:area" component={SearchResult} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/agents" component={Agents} />
              <Route exact path="/property/:slug" component={PropertyDetails} />
              <Route exact path="/agent/listing/:id" component={AgentListing} />
            </Switch>
            <Footer/>         
          </main> 
        </div>
      )

    }

}

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.utility.loading,
})

export default connect(mapStateToProps, {loadPage})(Public);