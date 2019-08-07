import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class AddAgent extends Component {
state = {
  fname: "",
  lname: "",
  email: "",
  username: "",
  password: "",
  password2: "",
  role: 0
}

submitHandler = event => {
  event.preventDefault();
  event.target.className += " was-validated";
};

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
};


render() {
  console.log(this.props.isOpen)
  return (
      <React.Fragment>
        <button className="dropbutton btn btn-light" onClick={this.props.toggle(14)}> Add Agent</button>
        <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle(14)} size={"lg"} style={{right: "50px"}}>
          <MDBModalHeader toggle={this.props.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
           <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
         
            <MDBCol md="4">
              <MDBInput
                value={this.state.username}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="username"
                label="Username"
                required
              >
                <div className="invalid-feedback">
                  Please provide a Username.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="password"
                label="Password"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password2}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="password2"
                label="Confirm Password"
                required
              >
                <div className="invalid-feedback">
                  Please match your password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggle(15)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default AddAgent