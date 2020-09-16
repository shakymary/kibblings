import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/Footer.css";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <div className="about-mainbody ">
      <img
        className=""
        style={{
          height: "100%",
          width: "100%",
        }}
        src={require("../components/Images/about_pageImage.jpg")}
        alt="About"
      />

      <h3 className="about-title about-container">ABOUT KIBBLINGS</h3>
      <p className="container about-text">
        Kibblings is an online, searchable database of animals that need homes.
        It is also a directory of nearly 11,000 animal shelters and adoption
        organizations across the U.S., Canada and Mexico.Organizations maintain
        their own home pages and available-pet databases. <br />
        <br />
        Our mission To use Internet technology and the resources it can generate
        to increase public awareness of the availability of high-quality
        adoptable pets and the overall effectiveness of pet adoption programs
        across North America to the extent that the euthanasia of adoptable pets
        is eliminated Elevate the status of pets to that of family member from
        the comfort of their personal computers, pet lovers can search for a pet
        that best matches their needs. They can then reference a shelter’s web
        page and discover what services it offers. <br />
        <br />
        Kibblings also includes a pet-care resource directory and a library of
        free pet-care articles to help keep pets in their homes. Petfinder is
        made up of animal-care professionals and regular people volunteering for
        their local animal welfare organizations all working together to
        maintain active and accurate homeless pet lists.
      </p>
      <Footer />
    </div>
  );
};

export default About;
