import React from "react";
import { MDBContainer, MDBAlert, MDBRow } from "mdbreact";

const Alert = (props) => {
  return (
    <MDBContainer>
      <MDBAlert color={props.color}>
        <p onClick={props.clearError}> {props.msg}</p>
      </MDBAlert>
    </MDBContainer>
  );
};

export default Alert;
