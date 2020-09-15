import React from "react";
import {
  Card,
  CardDeck,
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "../components/Footer.css";

export const Cards = (props) => {
  return (
    <Card style={{ width: props.width }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.petName}</Card.Title>
        <Card.Text>{props.petBreed}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const NewPetCard = ({ image, petName, petBreed, children }) => {
  return (
    //center content
    <MDBCol className="mt-3">
      <MDBCard style={{ width: "100%" }}>
        <MDBCardImage className="img-fluid" src={image} waves />
        <MDBCardBody style={{ content: "center" }}>
          <MDBCardTitle>{petName}</MDBCardTitle>
          <MDBCardTitle>{petBreed}</MDBCardTitle>
          {children}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

// Cards Created for Adoption Page
export const PetCard = ({ image, petName, petBreed, children }) => {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px", maxHeight: "300px" }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={image}
            className="card-img rounded-circle"
            alt="..."
            style={{
              maxHeight: "160px",
              maxWidth: "160px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{petName}</h3>
            <h5 className="card-text dark">{petBreed}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </div>
  );
};

//
export const InfoCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.petName}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Breed: {props.breed}</ListGroupItem>
        <ListGroupItem>Age: {props.age}</ListGroupItem>
        <ListGroupItem>Weight: {props.weight}</ListGroupItem>
        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
        <ListGroupItem>Color: {props.color}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Edit </Button>
        <Button variant="danger">Remove </Button>
      </Card.Body>
    </Card>
  );
};

export const AboutCard = () => {
  return (
    <>
      <Container style={{ paddingTop: "30px" }}>
        {/* <h1 style={{ fontSize: "85px", textAlign: "center" }}>
          🐶About Kibblings!🐱
        </h1>
        <h5 className="mb-2 text-muted" style={{ textAlign: "center" }}>
          Created by Mykhas Nallas, Napoleon Vuong, Alvaro Centeno, and Shakila
          Marando{" "}
        </h5> */}
        <h3 style={{ paddingTop: "30px" }}>
          With how busy our day to day lives can be, we sometimes need a little
          help with balancing our responsibilities and keeping track of those
          things that are most important to us, and as pet owners, we have the
          added responsibility of taking care of our best friends. With the
          Kibblings app, we have developed a platform that helps users keep
          track and update their pets’ health portfolio. Users can track and
          also get reminders for their pets’ last vet visit, vaccine shots,
          weight, grooming visits, and more! Don’t have a pet? Our app can help
          you with this as well by visiting our adoption page. Here, users will
          be able to find pets that are ready to find loving homes near them.
        </h3>
      </Container>
    </>
  );
};
