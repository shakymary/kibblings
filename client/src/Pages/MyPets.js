import React, { useState, useEffect } from "react";
import {} from "react-bootstrap";
import Btn from "../components/Button.js";
import { Forms } from "../components/Form";
import { PetCard, NewPetCard } from "../components/Card";
import { Footer } from "../components/Footer";
import { TabsDefault } from "../components/Tabs";
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

      {petCollection.map((item, index) => {
        return (
          <NewPetCard
            key={index}
            image={`https://picsum.photos/id/237/200/300`}
            petName={item.name}
            petBreed={item.breed}
          >
            <Btn variant="primary" text="🔎" />
            <Btn
              variant="danger"
              text="🗑"
              onClick={() => {
                Axios.delete(`/users/remove/${item._id}`, {
                  headers: {
                    "x-auth-token": localStorage.getItem("auth-token"),
                  },
                });
                // reloads the page to update list(find way to improve)
                window.location.reload(true);
              }}
            />
            <TabsDefault
              age={"Age: " + item.age}
              weight={"Weight: " + item.weight}
              breed={"Breed: " + item.breed}
              gender={"Gender: " + item.gender}
              color={"Color: " + item.color}
              microchip={"Microchip: " + item.microchip}
              rabies={"Rabies: " + item.rabies}
              vaccines={item.vaccines}
              diet={item.diet}
            />
          </NewPetCard>
        );
      })}
      <Footer />
    </div>
  );
};

export default MyPets;
