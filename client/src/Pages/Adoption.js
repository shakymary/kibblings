import React, { useEffect, useState } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import Jumbotron from "../components/Jumbotron";
import { Forms } from "../components/Form";
import { Footer } from "../components/Footer";
import { PetCard } from "../components/Card";
import Btn from "../components/Button";
import "../components/Footer.css";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AdoptionImage from "../components/Images/LandingAdoption2.mp4";

const Adoption = (e) => {
  const [searchPet, setSearchPet] = useState();
  const [pets, setPet] = useState([]);

  const inputChange = (e) => {
    const { value } = e.target;
    setSearchPet(value);
  };
  let token = {};
  const getPets = (e) => {
    e.preventDefault();
    Axios.get("/users/apiToken")
      .then((response) => {
        token = response.data;
      })
      .then((res) => {
        Axios.get(
          `https://api.petfinder.com/v2/animals?type=${searchPet}&page=2`,
          {
            headers: {
              Authorization: token.tokenType + " " + token.accessToken,
            },
          }
        ).then((res) => {
          setPet(res.data.animals);
          console.log(res.data.animals);
        });
      });
  };
  useEffect(() => {}, []);

  return (
    <>
      {/* <MDBContainer fluid> */}
      {/* <MDBRow> */}
      {/* <MDBCol> */}
      <MDBJumbotron style={{ padding: "0", width: "100%" }}>
        <MDBCol
          className="text-white text-center py-1 px-4"
          style={{
            backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
          }}
        >
          <MDBCardTitle
            className="h1-responsive m-5 font-bold"
            style={{ fontSize: "85px" }}
          >
            Adoption Page
          </MDBCardTitle>
        </MDBCol>
      </MDBJumbotron>
      {/* </MDBCol> */}
      {/* </MDBRow> */}
      {/* </MDBContainer> */}

      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, width: "100%" }}>
              <MDBCol
                className="text-white text-center py-1 px-4 my-5"
                style={{
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                }}
              >
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  Find pets here!
                </MDBCardTitle>
                <video autoPlay muted className="d-block w-100">
                  <source src={AdoptionImage} type="video/mp4"></source>
                </video>
                <MDBCol className="py-5">
                  <p className="mx-5 mb-5">
                    Find adoptable pets here on our adoption page. Just type in
                    a pet type such as cat, dog, or even horse in the search bar
                    below and find a pet thats right for you!
                  </p>
                  <Forms
                    placeholder="Search animals"
                    className="mr-sm-2 secondary"
                    btnSubmitText="Search"
                    onChange={inputChange}
                    onClick={getPets}
                  />
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        {pets.map((item) => {
          return (
            <PetCard
              image={
                item.primary_photo_cropped === null
                  ? `https://angelinacountyhumanesociety.org/files/2019/03/1553127681886_feature2.png`
                  : `${item.primary_photo_cropped.medium}`
              }
              petName={item.name}
              petBreed={
                item.breeds.secondary === null
                  ? item.breeds.primary
                  : item.breeds.primary + " " + item.breeds.secondary
              }
              petDescription={item.description}
            >
              <Btn
                variant="primary"
                text="View"
                // better if opens a new tab
                onClick={() => window.location.replace(`${item.url}`)}
              />
            </PetCard>
          );
        })}
      </MDBContainer>
      <Footer />
    </>
  );
};
export default Adoption;
