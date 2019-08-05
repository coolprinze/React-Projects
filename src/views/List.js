import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
}



render() {
  console.log(this.props.isOpen)
  return (
      <React.Fragment>
        <button color="primary" onClick={this.props.toggle(14)}>View</button>
        <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle(14)} centered>
          <MDBModalHeader toggle={this.props.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default ModalPage