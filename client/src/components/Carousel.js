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
            <h1> Testing with Carousel Items</h1>
            <img
                className="d-block w-100"
                src={"./Assets/KibblingsPotentialFaviconLogo.jpg"}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export const ChildTest = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const Child = () => {
    return (
        <h1>Child Here</h1>
    )
}




