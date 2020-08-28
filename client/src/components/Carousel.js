import React from 'react'
import { Carousel } from 'react-bootstrap'
// import CarouselItem from "../Carousel/CarouselItem"

export const Carousels = ({ children }) => {
    return (
        <Carousel>
            {children}
        </Carousel>
    )
}

export const CarouselItems = () => {
    return (
        <Carousel.Item>
            {/* <img
                className="d-block w-100"
                src={"https://picsum.photos/id/237/200/300"}
                alt="First slide"
            /> */}
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

