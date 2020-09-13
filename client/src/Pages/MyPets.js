import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form, Card } from "react-bootstrap";
import Btn from "../components/Button.js";
import { Forms } from "../components/Form";
import { PetCard, NewPetCard } from "../components/Card";
import { Footer } from "../components/Footer";
import { TabsDefault } from "../components/Tabs";
import Axios from "axios";
import { ModalCenter } from "../components/Modal";

const MyPets = () => {
  const [petCollection, setPetCollection] = useState([]);

  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [breed, setBreed] = useState();
  const [color, setColor] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [microchip, setMicrochip] = useState();
  const [vaccines, setVaccines] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [rabies, setRabies] = useState();

  const vaccineLabels = [
    "Rabies",
    "Distemper",
    "Hepatitis/Adenovirus",
    "Parvovirus",
    "Parainfluenza",
    "Bordetella",
    "Leptospirosis",
    "Lyme Disease",
    " Coronavirus",
    "Giardia",
    "Canine Infuenza H3N8",
  ];
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
      <Container>
        <Forms
          placeholder="Find Pet"
          classNameName="mr-sm-2 secondary"
          btnSubmitText="Search"
        />

        {petCollection.map((item, index) => {
          return (
            <NewPetCard
              key={index}
              image={`https://picsum.photos/id/237/525/250`}
              petName={item.name}
              petBreed={item.breed}
            >
              <ModalCenter
                onClick={async () => {
                  let editedPet = {
                    name,
                    age,
                    weight,
                    breed,
                    color,
                    gender,
                    birthday,
                    microchip,
                    vaccines,
                    rabies,
                  };

                  await Axios.patch(`/users/edit/${item._id}`, editedPet, {
                    headers: {
                      "x-auth-token": localStorage.getItem("auth-token"),
                    },
                  });
                  renderPets();
                }}
              >
                <Container>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group controlId="name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group controlId="age">
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="weight">
                          <Form.Label>Weight</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.weight}
                            onChange={(e) => setWeight(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group controlId="breed">
                          <Form.Label>Breed</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.breed}
                            onChange={(e) => setBreed(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="color">
                          <Form.Label>Color</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.color}
                            onChange={(e) => setColor(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="gender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            {/* <option>Male</option>
                  <option>Female</option> */}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="birthday">
                          <Form.Label>Birthday</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="microchip">
                          <Form.Label>Microchip</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={item.microchip}
                            onChange={(e) => setMicrochip(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      {vaccineLabels.map((vacc) => {
                        return (
                          <div className="form-check">
                            <br />
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={vacc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              {vacc}
                            </label>
                            <br />
                          </div>
                        );
                      })}
                    </Col>
                    <Col></Col>
                  </Row>
                </Container>
              </ModalCenter>
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
                birthday={"Birthday: " + item.birthday}
                weight={"Weight: " + item.weight}
                breed={"Breed: " + item.breed}
                gender={"Gender: " + item.gender}
                color={"Color: " + item.color}
                microchip={"Microchip: " + item.microchip}
                rabies={"Rabies: " + item.rabies}
                vaccines={item.vaccines.map((item) => {
                  return <ul>{"💉     " + item}</ul>;
                })}
                diet={item.diet.map((item) => {
                  return <ul>{"💉     " + item}</ul>;
                })}
              />
            </NewPetCard>
          );
        })}
      </Container>
    </div>
  );
};

export default MyPets;
