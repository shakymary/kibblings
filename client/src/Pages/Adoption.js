import React, { useEffect, useState } from "react";
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
import Jumbotron from "../components/Jumbotron";
import { Forms } from "../components/Form";
import { Footer } from "../components/Footer";
import { PetCard } from "../components/Card";
import Btn from "../components/Button";
import "../components/Footer.css";
import Axios from "axios";
import { Container } from "react-bootstrap";

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
    <div>
      <Jumbotron jumbotronTitle="Human's best friends" jumbotronText="lllll" />

      <Forms
        placeholder="Search animals"
        className="mr-sm-2 secondary"
        btnSubmitText="Search"
        onChange={inputChange}
        onClick={getPets}
      />
      {pets.map((item) => {
        return (
          <Container>
            <PetCard
              image={
                item.primary_photo_cropped === null
                  ? `https://angelinacountyhumanesociety.org/files/2019/03/1553127681886_feature2.png`
                  : `${item.primary_photo_cropped.medium}`
              }
              petName={item.name}
              petBreed={item.breeds.primary + " " + item.breeds.secondary}
            >
              <Btn
                variant="primary"
                text="View"
                // better if opens a new tab
                onClick={() => window.location.replace(`${item.url}`)}
              />
            </PetCard>
          </Container>
        );
      })}
    </div>
  );
};
export default Adoption;
