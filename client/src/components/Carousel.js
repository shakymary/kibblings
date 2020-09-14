import React from "react";
import { Carousel } from "react-bootstrap";
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer,
} from "mdbreact";
import LandingVideo from "./Images/FrenchBulldogLanding2.mp4"
import LandingVideo2 from "./Images/PlaceHolder1920x1080.mp4"
import LandingVideo3 from "./Images/CatLanding2.mp4"


//This testing has solved previous children issue, now using MDB
//Remove MBD Container for HUGE Carousel
export const Carousels = ({ children }) => {
    return (
        // <MDBContainer style={{ paddingTop: "30px" }}>
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
        >
            <MDBCarouselInner>{children}</MDBCarouselInner>
        </MDBCarousel>
        // </MDBContainer>
    );
};

export const CarouselItems = () => {
    return (
        <>
            <MDBCarouselItem itemId="1">
                <MDBView>
                    <video autoPlay loop muted className="d-block w-100">
                        <source src={LandingVideo} type="video/mp4"></source>
                    </video>
                </MDBView>
                <MDBCarouselCaption>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                    <video autoPlay loop muted className="d-block w-100">
                        <source src={LandingVideo3} type="video/mp4"></source>
                    </video>
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBView>
                    <video autoPlay loop muted className="d-block w-100">
                        <source src={LandingVideo2} type="video/mp4"></source>
                    </video>
                    <MDBMask overlay="black-slight" />
                </MDBView>
            </MDBCarouselItem>
        </>
    )
}

//The child Testing Here may work using MDB. Double Check logic with Mykhas for Confirmation of logistics
//Or Rerun after potential post-confirmation Errors

// export const ChildTest = ({ children }) => {
//     return (

//     )
// }

// export const Child = () => {
//     return (

//     )
// }
