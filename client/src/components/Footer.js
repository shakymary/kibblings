import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4 content">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol className="column" md="3">
              <h5 className="title">Follow us</h5>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-instagram"></i>
            </MDBCol>
            <MDBCol className="column" md="3">
              <h5 className="title">About Us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About Kibblings</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">FAQs</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol className="column" md="3">
              <h5 className="title">Pet Care Topics</h5>
              <ul>
                <li className="list-unstyled ">
                  <a href="#!">Dog Care</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Cat Care</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">All Pets Care</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href=""> Kibblings.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
