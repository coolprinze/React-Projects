import React, { Component } from 'react'
import { connect } from 'react-redux'
import { subscribe } from '../actions';
import { ItemLoading } from './Loading';


class Newsletter extends Component {
  state = {
    email:"",
    subscribing: false
  }

  
  onChange = e => this.setState({ email: e.target.value });

  onSubscribeClick = async e => {
    e.preventDefault();
    await this.setState({ subscribing: true });
    await this.props.subscribe(this.state.email);
    await this.setState({ email: "", subscribing: false });
  }

  render(){
  
    return (
      <section className="section-padding footer mt-5">
          <div className="container ">
              <h3 className="mb-4 text-center text-uppercase">To get latest update subscribe to our </h3>
              <h5 className="text-center text-muted pb-5 text-uppercase">newsletter</h5>
              { this.state.subscribing? <ItemLoading text="Adding email to list..." wrapperClasses="row" />: 
              <div className="row ">
                  <div className="col-lg-6 col-md-6 offset-sm-3 ">
                      <form className="row" onSubmit={this.onSubscribeClick}>
                          <div className="col-sm-9 px-0">
                              <input type="email" name="newsletter" onChange={this.onChange} value={this.state.email} className="form-control py-3" id="newsletter" required style={{ background: 'rgb(32, 32, 54)',  height: '80px', color: '#ffffff', fontSize: '1.5rem' }} placeholder="EMAIL ADDRESS" />
                          </div>
                          <div className="col-sm-3 px-0 py-2 align-middle">
                              <button className="btn btn-lg bg-orange btn-subscribe">Subscribe</button>
                          </div>
                      </form>
                  </div>
              </div>}
          </div>
      </section>
    )
  }
}

const mapState = state => ({
  email: state.utility.email
})

const mapDispatch = dispatch => ({
  subscribe: email => dispatch(subscribe({email}))
})

export default connect(mapState, mapDispatch)(Newsletter);
