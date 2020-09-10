import React from 'react'
import { Carousel } from 'react-bootstrap'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";


//This testing has solved previous children issue, now using MDB
export const Carousels = ({ children }) => {
    return (
        <MDBContainer style={{ paddingTop: "30px" }}>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    {children}
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    )
}

export const CarouselItems = () => {
    return (
        <>
            <MDBCarouselItem itemId="1">
                <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                    />
                    <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Light mask</h3>
                    <p>First text</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                        alt="Second slide"
                    />
                    <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Second text</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                        alt="Third slide"
                    />
                    <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Slight Mast</h3>
                    <p>Third text</p>
                </MDBCarouselCaption>
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




