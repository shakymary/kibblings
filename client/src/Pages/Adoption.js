import React from "react";
import Jumbo from "../components/Jumbotron";
import Forms from "../components/Form";
import Cards from "../components/Card";

const Adoption = () => {
  return (
    <div>
      <Jumbo jumbotronTitle="Hello" jumbotronText="lorem schoolboot" />
      <Forms
        placeholder="Search for a Pet"
        className="mr-sm-2 secondary"
        btnSubmitText="exampletext"
      />
      <Cards
        image={`https://picsum.photos/id/237/200/300`}
        petName="bob"
        petBreed="golden"
      />
    </div>
  );
};

export default Adoption;
