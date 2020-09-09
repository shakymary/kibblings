import React from "react";
import {
    Carousels,
    CarouselItems,
    ChildTest,
    Child,
} from "../components/Carousel";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import Footer from "../components/Footer";
// import axios from "axios";

const Landing = () => {
    return (

        <Container fluid>
            {/* <ChildTest>
                <Child></Child>
            </ChildTest> */}

            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Carousels>
                        <CarouselItems />
                    </Carousels>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default Landing;
