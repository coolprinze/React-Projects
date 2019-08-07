import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import all pages components
import Dashboard from './Dashboard'
import Profile from './Profile';
import PostRequest from './PostRequest'
import Alerts from './Alerts';
import SearchHistory from './SearchHistory';





class User extends Component {

    componentDidMount() {

    }

    render() {

      if(this.props.isAuthenticated){
        return ( 
          <div>
            <main>
              <Switch>
                <Route exact path="/user" component={Dashboard}/>
                <Route exact path="/user/search-history" component={SearchHistory}/>
                <Route exact path="/user/alerts" component={Alerts}/>
                <Route exact path="/user/profile" component={Profile} />
                <Route exact path="/user/post-request" component={PostRequest} /> 
              </Switch>
            </main>          
          </div>
        )
      }

      return (<Redirect to="/login" />)

    }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(User);