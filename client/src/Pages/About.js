import React from "react";
import "../components/Footer.css";
import { Footer } from "../components/Footer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBContainer,
} from "mdbreact";

const About = () => {
  return (
    <div className="body">
      <MDBContainer>
        <MDBCardGroup>
          <MDBCard className="card-container aboutPage-color">
            <MDBCardBody>
              <MDBCardTitle className="aboutPage-title" tag="h5">
                🌼 About Kibblings 🌺
              </MDBCardTitle>
              <MDBCardText className="aboutPage-text">
                Kibblings is an online, searchable database of animals that need
                homes. It is also a directory of nearly 11,000 animal shelters
                and adoption organizations across the U.S., Canada and
                Mexico.Organizations maintain their own home pages and
                available-pet databases. Our mission To use Internet technology
                and the resources it can generate to increase public awareness
                of the availability of high-quality adoptable pets and the
                overall effectiveness of pet adoption programs across North
                America to the extent that the euthanasia of adoptable pets is
                eliminated Elevate the status of pets to that of family member
                From the comfort of their personal computers, pet lovers can
                search for a pet that best matches their needs. They can then
                reference a shelter’s web page and discover what services it
                offers. Kibblings also includes a pet-care resource directory
                and a library of free pet-care articles to help keep pets in
                their homes. Petfinder is made up of animal-care //
                professionals and regular people volunteering for their local
                animal // welfare organizations all working together to maintain
                active and // accurate homeless pet lists.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBContainer>
      <Footer style={{ marginTop: "30px" }} />
    </div>
  );
};

export default About;
