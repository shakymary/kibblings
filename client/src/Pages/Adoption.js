import React, { useEffect, useState } from "react";
import Jumbo from "../components/Jumbotron";
import { Forms } from "../components/Form";
import { PetCard } from "../components/Card";
import Footer from "../components/Footer";
import Axios from "axios";

const Adoption = () => {
<<<<<<< HEAD
  const [pet, setPet] = useState([]);
=======
  const [pets, setPet] = useState([]);
>>>>>>> 1a561ac8bb3d8e128d644fde56fb7e1e0edf6ea0
  const getPets = () => {
    let token = {};
    Axios.get("/users/apiToken")
      .then((response) => {
        token = response.data;
      })
      .then((res) => {
        Axios.get("https://api.petfinder.com/v2/animals?type=cat&page=2", {
          headers: {
            Authorization: token.tokenType + " " + token.accessToken,
          },
        }).then((res) => {
          setPet(res.data.animals);
          console.log(res.data.animals);
        });
      });
  };
  useEffect(() => {
    getPets();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      {pet.map((item) => {
        return (
          <PetCard
            image={item.photos[0].full}
            petName={item.name}
            petBreed={item.breeds.primary + " " + item.breeds.secondary}
          />
        );
      })}
=======
>>>>>>> 1a561ac8bb3d8e128d644fde56fb7e1e0edf6ea0
      <Jumbo jumbotronTitle="Hello" jumbotronText="lorem schoolboot" />
      <Forms
        placeholder="Search for a Pet"
        className="mr-sm-2 secondary"
        btnSubmitText="exampletext"
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
