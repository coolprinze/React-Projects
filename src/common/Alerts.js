import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
  }

  componentDidUpdate(prevProps) {
    const {error, alert, messages} = this.props
    if(error !== prevProps.error){
      for (const [field, value] of Object.entries(error.msg)) {
        alert.error(`${field} Error: ${value}`)
      }
    }

    if(messages !== prevProps.messages){
      messages.type? alert.success(`${messages.msg}`) : alert.error(`${messages.msg}`)
    }
    
  }

  render() {
    return (<Fragment />)
    
  }
}

const mapStateToProps = state => ({
  error: state.utility.errors,
  messages: state.utility.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
