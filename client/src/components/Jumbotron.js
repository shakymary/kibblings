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
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>{props.jumbotronTitle}</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.wjbf.com/wp-content/uploads/sites/47/2018/06/pets2_36079153_ver1.0.jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Photography
              </MDBCardTitle>
              <MDBCardText>{props.jumbotronText}</MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#">
                    <MDBIcon
                      fab
                      icon="linkedin-in"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                  <a href="#">
                    <MDBIcon
                      fab
                      icon="twitter"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                  <a href="#">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                </MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Jumbotron;
