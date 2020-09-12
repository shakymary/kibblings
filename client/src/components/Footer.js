import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import About from "../Pages/About";
import "./Style.css";

export const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      <MDBFooter className="font-small pt-4 mt-4 content footer-color">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol className="column" md="3">
              <h6 className="">ABOUT US</h6>
              <ul>
                <li className="list-unstyled ">
                  <a href="/about">About Kibblings</a>
                </li>
                <li className="list-unstyled ">
                  <a href="#!">FAQs</a>
                </li>
                <li className="list-unstyled ">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol className="column" md="3">
              <h6 className="title">PET CARE TOPICS</h6>
              <ul>
                <li className="list-unstyled ">
                  <a href="https://www.youtube.com/watch?v=Tn3lZE0rRBs">
                    Dog Care
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/watch?v=IKR6FPerXes">
                    Cat Care
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/watch?v=Yzv0gXqoCkc">
                    All Pets Care
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol className="column" md="3">
              <h6 className="title">CONTACT DEVELOPERS</h6>
              <ul>
                <li className="list-unstyled ">
                  <a href="https://www.youtube.com/watch?v=Tn3lZE0rRBs">
                    Shakila Marando
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/watch?v=IKR6FPerXes">
                    Alvaro Centeno
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/watch?v=Yzv0gXqoCkc">
                    Myhkas Nallas
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/watch?v=Yzv0gXqoCkc">
                    Napoleon Simmaly
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <span>Kibblings.com</span>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

// export default Footer;
// export const FooterPage = () => {
//   return (
//     <MDBFooter
//       color="blue"
//       className="font-small pt-4 mt-4"
//       style={{ width: "100%" }}
//     >
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright:{" "}
//           <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// };
