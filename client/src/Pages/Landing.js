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
            <Container fluid style={{ minHeight: "100vh" }}>

                <Row>
                    <Col>
                        <Carousels>
                            <CarouselItems />
                        </Carousels>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AboutCard />
                    </Col>
                </Row>

                <Row>
                    <Footer />
                </Row>

            </Container>
        </>
    );
};

export default Landing;
