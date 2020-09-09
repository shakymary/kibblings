import React from "react";
import { Carousels, CarouselItems, ChildTest, Child } from "../components/Carousel";
import { Col, Row, Container, Carousel } from "react-bootstrap";
// import axios from "axios";

const Landing = () => {
    return (

        <Container fluid>
            <ChildTest>
                <Child></Child>
            </ChildTest>

            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Carousels>
                        <CarouselItems />
                    </Carousels>
                </Col>

            </Row>


        </Container>
    );
};

export default Landing;
