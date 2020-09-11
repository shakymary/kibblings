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

const Landing = () => {
  return (
    <>
      <Carousels>
        <CarouselItems />
      </Carousels>
      <Container fluid style={{ minHeight: "100vh", width: "100%" }}>
        <Row>
          <Col>
            <AboutCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
