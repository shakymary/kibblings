import React from "react";
import Jumbo from "../components/Jumbotron";
import Forms from "../components/Form"

const Adoption = () => {
  return (
    <div>
      <Jumbo jumbotronTitle="Hello" jumbotronText="lorem schoolboot" />
      <Forms
        placeholder="Search for a Pet"
        className="mr-sm-2 secondary"
        btnSubmitText="exampletext"
      />
    </div>
  );
};

export default Adoption;
