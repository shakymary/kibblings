import React from "react";
import {
    Carousels,
    CarouselItems,
    ChildTest,
    Child,
} from "../components/Carousel";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import Footer from "../components/Footer";
import { AboutCard } from "../components/Card";

const Landing = () => {
    return (
        <>
            <Container fluid>
                {/* <ChildTest>
                <Child></Child>
            </ChildTest> */}

                <Row>
                    <Col>
                        {/* <Carousels>
                            <CarouselItems />
                        </Carousels> */}

                        <ChildTest>
                            <Child />
                        </ChildTest>
                    </Col>
                </Row>
            </Container>

            <AboutCard />
            <Footer />
        </>
    );
};

export default Landing;
