import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Jumbo(props) {
  return (
    <Jumbotron fluid>
      <Container className="jumbotron">
        <h1>{props.jumbotronTitle}</h1>
        <p>{props.jumbotronText}</p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
