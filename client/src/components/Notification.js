import React, { Component } from "react";
import {
  MDBNotification,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

export class Notification extends Component {
  render() {
    return (
      <MDBNotification
        style={{
          color: "black",
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999,
        }}
        show
        fade
        iconClassName="text-primary"
        title={this.props.title}
        message={this.props.message}
        text={this.props.text}
      />
    );
  }
}

export const NotifCard = ({ subject, note, time }) => {
  return (
    <MDBCol>
      <MDBCard style={{ marginTop: 3, width: "22rem" }}>
        <MDBCardBody>
          <h5>{subject}</h5>
          <h6>{time}</h6>
          <p>{note}</p>
          <MDBBtn color="danger" size="sm">
            Clear
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
