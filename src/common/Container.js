import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux';
import Login from '../pages/Login';

import PropTypes from 'prop-types'
import ProtectedRoutes from './ProtectedRoutes';

import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './Alerts';
import { createMsg } from '../actions/messages';

// Alert Options
const alertOptions = {
  timeout: 8000,
  position: 'top right'
}

class Container extends Component {
  
  state = {
    loggedIn: this.props.loggedIn,
    menu: this.props.menu
  }

  static getDerivedStateFromProps(props, state) {
    const { menu, loggedIn } = props;

    return { menu, loggedIn }
  }

  render() {
    const { menu, loggedIn } = this.state
    return (
      <Provider template={AlertTemplate} {...alertOptions}>

        <Alerts />           
        {loggedIn?     
          <Router >
            <ProtectedRoutes menu={menu}/>
          </Router>
          :
          <Router >
            <Login />
          </Router>
        }
      </Provider>
    )
  }
}

Container.propTypes = {
  menu: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  menu: state.components.menu,
  loggedIn: state.auth.loggedIn
});

export default  connect(mapStateToProps, { createMsg }) (Container);