import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input, TextArea } from '../common/Form';
import { sendMessage } from '../actions';
import Loading, { ItemLoading } from './Loading';

class Contact extends Component{
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
    sendingMsg: false
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
    await this.setState({sendingMsg: true})
    const { name, email, subject, message } = await this.state;
    await this.props.sendMessage({ name, email, subject, message });
    if (this.props.reset)
      await this.setState({ name: '', email: '', subject: '', message: '', }) ;
    await this.setState({sendingMsg: false})
  }

  render() {

    if (this.state.sendingMsg)
      return <ItemLoading text="Sending message..." wrapperClasses="col-md-5 offset-md-1 px-5 py-3" />

    return (
      <div className="col-md-5 offset-md-1 px-5 py-3 bg-white" style={{ boxhadow: '0px 2px 4px rgba(180, 180, 180, 0.5)', borderRadius: '12px' }}>
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

export default connect(mapStateToProps, { sendMessage })(Contact);
