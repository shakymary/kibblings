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
        <div className="page">
            <Carousels>
                <CarouselItems />
            </Carousels>
            <Container fluid >

                <Row>
                    <Col>
                        <AboutCard />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Landing;
