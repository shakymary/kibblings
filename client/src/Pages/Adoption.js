import React from "react";
import Jumbo from "../components/Jumbotron";
import Forms from "../components/Form";
import { Cards } from "../components/Card";
import Footer from "../components/Footer";

const Adoption = () => {
  return (
    <div className="body">
      <Jumbo jumbotronTitle="Hello" jumbotronText="lorem schoolboot" />
      <Forms
        placeholder="Search for a Pet"
        className="mr-sm-2 secondary"
        btnSubmitText="exampletext"
      />
      <Cards
        width="18rem"
        image={`https://picsum.photos/id/237/200/300`}
        petName="bob"
        petBreed="golden"
      />
      <Footer />
    </div>
  );
};

export default Adoption;
