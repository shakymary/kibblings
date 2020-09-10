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
