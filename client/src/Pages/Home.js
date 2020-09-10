import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Card } from "react-bootstrap";
import Axios from "axios";

import { Footer } from "../components/Footer";

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

  const submit = async (e) => {
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
      rabies,
    };

    await Axios.post("/users/addPet", newPet, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setLgShow(false);
  };

  return (
    <>

      <Row className="mt-3 ml-3">
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>Hello User</Card.Text>
          </Card.Body>
        </Card>
        <Button className="float-sm-rightt" style={{ align: 'right' }} onClick={() => setLgShow(true)}>
          Add Pet
      </Button>
      </Row>
      <Row className="mt-3 ml-5">
        <Card className="ml-5" style={{ width: '70rem' }}>
          <Card.Img variant="top" style={{ width: '60rem', height: '20rem' }} src="https://s3fs.bestfriends.org/s3fs-public/pages/Adoptheader.jpg" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>

      </Row>




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
                  type="text"
                  placeholder="eg. Male"
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
                        value={vacc}
                      // onCheck={(e) => {
                      //   setVaccines([...vaccines, e.target.value]);
                      //   console.log(vaccines);
                      // }}
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
              {/* <Form.Group controlId="allergies">
                <Form.Label>Allergies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg. Penicillin"
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </Form.Group> */}
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
                onClick={submit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>



      <Footer />
    </>
  );
};
export default Home;
