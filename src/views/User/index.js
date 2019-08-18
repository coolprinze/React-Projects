import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import all pages components
import Dashboard from './Dashboard'
import Profile from './Profile';
import PostRequest from './PostRequest'
import Alerts from './Alerts';
import SearchHistory from './SearchHistory';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer';
import Loading from '../../component/Loading';
import { loadPage } from '../../actions';
import { UNLOAD_PAGE } from '../../actions/types';





class User extends Component {

    componentDidMount() {

    }
    async componentWillUnmount(){
      await this.props.loadPage(UNLOAD_PAGE);
    }

    render() {

      if(this.props.isAuthenticated){
        return ( 
          <div>
            <div className={`${this.props.loading? '' : 'd-none'}`}>
              <Loading />
            </div>
            <main className={`${this.props.loading? 'd-none' : ''}`}>
              <Header user={this.props.user} />
              <Switch>
                <Route exact path="/user" component={Dashboard}/>
                <Route exact path="/user/search-history" component={SearchHistory}/>
                <Route exact path="/user/alerts" component={Alerts}/>
                <Route exact path="/user/profile" component={Profile} />
                <Route exact path="/user/post-request" component={PostRequest} /> 
              </Switch>
              <Footer />
            </main>          
          </div>
        )
      }

      return (<Redirect to="/login" />)

    }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  loading: state.agent.loading
})

export default connect(mapStateToProps, {loadPage})(User);