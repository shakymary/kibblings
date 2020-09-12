import React from "react";
import {
  Carousels,
  CarouselItems,
  ChildTest,
  Child,
} from "../components/Carousel";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import { Footer, FooterPage } from "../components/Footer";
import { AboutCard } from "../components/Card";
// import "./Pages.css"

const Landing = () => {
  return (
    <>
      <Carousels>
        <CarouselItems />
      </Carousels>
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <AboutCard />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
