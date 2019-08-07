import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input, TextArea } from '../common/Form';
import { sendMessage } from '../actions';

class Contact extends Component{
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
  }

  onChange = e =>{
      let { errors } = this.state
      if (e.target.value === ''){
        errors = {...errors, [e.target.name]: `This field is required`}
      } else {
        delete errors[e.target.name]
      }
      this.setState({[e.target.name]: e.target.value, errors})
  }

  onSendMessage = async () => {
    await this.props.sendMessage(this.stste);
    if (this.props.reset)
      this.setState({ name: '', email: '', subject: '', message: ''}) ;
  }

  render() {

    return (
      <div className="col-5 offset-1 px-5 py-3 bg-white" style={{ boxhadow: '0px 2px 4px rgba(180, 180, 180, 0.5)', borderRadius: '12px' }}>
          <h3 className="py-3">Send us a message</h3>
  
        <form className="" action="index.html" method="post">
          <Input 
              label="Full Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={this.state.errors.hasOwnProperty('name')? this.state.errors.name: null} 
          />
          <Input 
              label="Email"
              type="email"
              name="email" 
              value={this.state.email}
              onChange={this.onChange}
              error={this.state.errors.hasOwnProperty('email')? this.state.errors.email: null} 
          />
          <Input 
              label="Subject"
              name="subject" 
              value={this.state.subject}
              onChange={this.onChange}
              error={this.state.errors.hasOwnProperty('subject')? this.state.errors.subject: null} 
          />
          <TextArea 
              label="Your Message"
              name="message" inputClass="form-control-lg bg-white" 
              value={this.state.message}
              onChange={this.onChange}
              error={this.state.errors.hasOwnProperty('message')? this.state.errors.message: null} 
          />  
          <button onClick={this.onSendMessage.bind(this)} className="btn bg-orange pl-4 pr-4 btn-block" type="button" name="button">Send</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reset: state.utility.reset
})

export default connect(null, { sendMessage })(Contact);
