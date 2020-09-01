import React from "react";
import { PetForm } from "../components/Form";

const Home = () => {
  return (
    <>
      <h1>Hello</h1>
      <PetForm
        placeholder="placeholder"
        className="text"
        btnSubmitText="Submit"
      />
    </>
  );
};

export default Home;
