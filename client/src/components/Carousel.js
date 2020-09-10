import React from 'react'
import { Carousel } from 'react-bootstrap'
// import CarouselItem from "../Carousel/CarouselItem"


//This testing has issues with multiple carousel items. this Test only works with one item, but MIGHT work with potential logic solutions
export const Carousels = ({ children }) => {
    return (
        <Carousel className="mt-5">
            <Carousel.Item >
                {children}
            </Carousel.Item>
        </Carousel>
    )
}

export const CarouselItems = () => {
    return (
        <>
            <div>
                <img
                    className="d-block w-100"
                    // src={"./Assets/KibblingsPotentialFaviconLogo.jpg"}
                    src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </div>
        </>
    )
}

//The child Testing Here makes no sense. Can subtitute with a single const export. WTF

export const ChildTest = ({ children }) => {
    return (
        <Carousel>
            {children}
        </Carousel>
    )
}

export const Child = () => {
    return (

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>


    )
}




