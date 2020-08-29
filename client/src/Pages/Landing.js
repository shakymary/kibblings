import React from "react";
import { Carousels, CarouselItems } from "../components/Carousel";
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const Landing = () => {

    // const APIRequest = new Promise((resolve, reject) => {
    //     resolve(axios.get("https://api.petfinder.com/v2/animals?type=dog&page=2")).then((res) => {
    //         let data = res.data;
    //     })
    //     reject((err) => {res.json(err)})

    // })
    // let request = axios.get("https://api.petfinder.com/v2/animals?type=dog&page=2");
    // console.log(request);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Carousels>
                        <h1>Checking</h1>
                        <CarouselItems />
                    </Carousels>
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;
