import React, { useState, useEffect } from "react";
import {} from "react-bootstrap";
import { Forms } from "../components/Form";
import { PetCard } from "../components/Card";
import { Footer } from "../components/Footer";
import Axios from "axios";

const MyPets = () => {
  const [petCollection, setPetCollection] = useState([]);
  const renderPets = async () => {
    await Axios.get("/users/all", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setPetCollection(res.data);
    });
  };

  useEffect(() => {
    renderPets();
  }, []);

  return (
    <div className="body">
      <Forms
        placeholder="Find Pet"
        classNameName="mr-sm-2 secondary"
        btnSubmitText="Search"
      />
      {petCollection.map((item) => {
        return (
          <PetCard
            image={`https://picsum.photos/id/237/200/300`}
            petName={item.name}
            petBreed={item.breed}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default MyPets;
