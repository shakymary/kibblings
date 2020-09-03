import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
const Home = () => {
  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [breed, setBreed] = useState();
  const [color, setColor] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [microchip, setMicrochip] = useState();
  const [vaccines, setVaccines] = useState();
  const [allergies, setAllergies] = useState();
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

  const savePet = async (e) => {
    e.preventDefault();
    const newPet = {
      name,
      age,
      weight,
      breed,
      color,
      gender,
      birthday,
      microchip,
      vaccines,
      allergies,
      rabies,
    };

    await Axios.post("/user/addPet", newPet);
    setLgShow(false);
  };

  return (
    <>
      <Button className="ml-3 mt-3" onClick={() => setLgShow(true)}>
        Add Pet
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Fill out the form below to add your pet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="ml-4 mr-4">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. Buddy"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. 5"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="weight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. 10lbs"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="breed">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. Dachshund"
                  onChange={(e) => setBreed(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. Black"
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="birthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. 9/18/2020"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="microchip">
                <Form.Label>Microchip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. 111-00-111"
                  onChange={(e) => setMicrochip(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="vaccines">
                <Form.Label>Vaccines</Form.Label>
                {vaccineLabels.map((vacc) => {
                  return (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => setVaccines(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        {vacc}
                      </label>
                    </div>
                  );
                })}
              </Form.Group>
              <Form.Group controlId="allergies">
                <Form.Label>Allergies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. Penicillin"
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="rabies">
                <Form.Label>Rabies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. 111-00-11"
                  onChange={(e) => setRabies(e.target.value)}
                />
              </Form.Group>

              <Button
                t
                ype="submit"
                className="btn btn-primary mb-3"
                onClick={savePet}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Home;
