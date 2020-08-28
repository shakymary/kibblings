import React from "react";
import {} from "react-bootstrap";
import Forms from "../components/Form";
import { PetCard } from "../components/Card";

const MyPets = () => {
  return (
    <div>
      <Forms
        placeholder="Find Pet"
        classNameName="mr-sm-2 secondary"
        btnSubmitText="Search"
      />
      <PetCard
        image={`https://picsum.photos/id/237/200/300`}
        petName="bob"
        petBreed="golden"
      />
    </div>
  );
};

export default MyPets;
