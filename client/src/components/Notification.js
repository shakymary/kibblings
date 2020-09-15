import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        style={{
          width: "auto",
          position: "fixed",
          top: "15px",
          right: "15px",
          zIndex: 9999,
          color: "black",
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

export default Notification;
