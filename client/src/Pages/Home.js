import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Footer from "../components/Footer";
import {
  Button,
  Modal,
  Form,
  Row,
  Card,
  Container,
  Col,
  Carousel,
} from "react-bootstrap";

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
      <Container fluid style={{ minHeight: "80vh" }}>
        <Row className="mt-3 ml-5">
          <Col>
            <Card border="info" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>Hello User</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Button
              className="float-sm-rightt"
              // style={{ position: "absolute", right: "15rem" }}
              onClick={() => setLgShow(true)}
            >
              Add Pet
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card bg={"info"}>
              {/* <Card.Img
                variant="top"
                style={{ width: "60rem", height: "20rem" }}
                src="https://s3fs.bestfriends.org/s3fs-public/pages/Adoptheader.jpg"
              /> */}
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <h3>Pet Dashboard</h3>
                  <Row>
                    <Col>
                      <p>Pet:{name}</p>
                      <p>Pet Weight: {weight}</p>
                      <p>Birthday:</p>
                      <p>Age:</p>
                    </Col>

                    <Col>
                      <p>Last Vet Visit:</p>
                      <p>Last Grooming:</p>
                      <p>Vaccines:</p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3 ml-5">
          <Col>
            <Carousel
              className="ml-5"
              style={{
                width: "25%",
                height: "auto",
                // marginB: 'auto',
                position: "absolute",
                left: "5%",
              }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "5%" }}
                  src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "5%" }}
                  src="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
                  alt="second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "5%" }}
                  src="https://i.insider.com/5efe3d7faee6a8324a656478?width=1100&format=jpeg&auto=webp"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              bg={"dark"}
              className="mr-5"
              style={{
                width: "30%",
                height: "auto",
                position: "absolute",
                right: "5%",
              }}
            >
              <Card.Body>
                <Card.Text style={{ color: "white" }}>
                  <h3>Reminders</h3>
                  <p>Medication:</p>
                  <p>Vet Appointment:</p>
                  <p>Dog Food:</p>
                  <p>Grooming:</p>
                  <p>Treats:</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
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
                  type="submit"
                  className="btn btn-primary mb-3"
                  onClick={submit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};
export default Home;
