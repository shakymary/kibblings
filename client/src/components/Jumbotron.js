// import React from "react";
// import { Jumbotron, Container } from "react-bootstrap";

// function Jumbo(props) {
//   return (
//     <Jumbotron fluid>
//       <Container className="jumbotron">
//         <h1>{props.jumbotronTitle}</h1>
//         <p>{props.jumbotronText}</p>
//       </Container>
//     </Jumbotron>
//   );
// }

// export default Jumbo;
import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";

const Jumbotron = (props) => {
  return (
    <MDBContainer className="mt-5 text-center" fluid>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center bodies">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>{props.jumbotronTitle}</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.cesarsway.com/wp-content/uploads/2018/05/allergies_0.jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Photography
              </MDBCardTitle>
              <MDBCardText>{props.jumbotronText}</MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol
                  md="3"
                  className="d-flex justify-content-around"
                ></MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Jumbotron;
