import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class ModalCenter extends Component {
  state = {
    modal14: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>
          ✎
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          centered
          size="fluid"
        >
          <MDBModalHeader toggle={this.toggle(14)}>
            Update Information
          </MDBModalHeader>
          <MDBModalBody>{this.props.children}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={(this.props.onClick, this.toggle(14))}
            >
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
