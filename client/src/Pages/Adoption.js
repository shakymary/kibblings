import React, { useEffect, useState } from "react";
import Jumbo from "../components/Jumbotron";
import { Forms } from "../components/Form";
import { PetCard } from "../components/Card";
import { Footer } from "../components/Footer";
import Axios from "axios";

const Adoption = (e) => {
  const [searchPet, setSearchPet] = useState();
  const [pets, setPet] = useState([]);
  const getPets = () => {
    let token = {};
    e.preventDefault();
    Axios.get("/users/apiToken")
      .then((response) => {
        token = response.data;
      })
      .then((res) => {
        Axios.get("https://api.petfinder.com/v2/animals?type=dog&page=2", {
          headers: {
            Authorization: token.tokenType + " " + token.accessToken,
          },
        }).then((res) => {
          setPet(res.data.animals);
          console.log(res.data.animals);
        });
      });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Jumbo jumbotronTitle="Hello" jumbotronText="lorem schoolboot" />
      <Forms
        placeholder="Search for a Pet"
        className="mr-sm-2 secondary"
        btnSubmitText="exampletext"
        onSubmit={getPets}
      />
      {pets.map((item) => {
        return (
          <PetCard
            image={item.primary_photo_cropped.medium}
            petName={item.name}
            petBreed={item.breeds.primary + " " + item.breeds.secondary}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default Adoption;
