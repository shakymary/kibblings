// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdbreact";

// const CardExample = () => {
//   return (
//     <div className="container  ">
//       <MDBRow className="about-container">
//         <MDBCol style={{ maxWidth: "100rem" }}>
//           <MDBCard reverse>
//             <MDBCardImage
//               cascade
//               style={{ height: "32rem", width: "100%" }}
//               src="https://www.robinkbennett.com/wp-content/uploads/2013/11/shutterstock_51472228-1024x582.jpg"
//             />
//             <MDBCardBody cascade className="">
//               <MDBCardTitle className="text-center">
//                 About Kibblings
//               </MDBCardTitle>

//               <MDBCardText>
//                 Kibblings is an online, searchable database of animals that need
//                 homes. It is also a directory of nearly 11,000 animal shelters
//                 and adoption organizations across the U.S., Canada and
//                 Mexico.Organizations maintain their own home pages and
//                 available-pet databases. <br />
//                 <br />
//                 Our mission To use Internet technology and the resources it can
//                 generate to increase public awareness of the availability of
//                 high-quality adoptable pets and the overall effectiveness of pet
//                 adoption programs across North America to the extent that the
//                 euthanasia of adoptable pets is eliminated Elevate the status of
//                 pets to that of family member from the comfort of their personal
//                 computers, pet lovers can search for a pet that best matches
//                 their needs. They can then reference a shelter’s web page and
//                 discover what services it offers. <br />
//                 <br />
//                 Kibblings also includes a pet-care resource directory and a
//                 library of free pet-care articles to help keep pets in their
//                 homes. Petfinder is made up of animal-care // professionals and
//                 regular people volunteering for their local animal // welfare
//                 organizations all working together to maintain active and //
//                 accurate homeless pet lists.
//               </MDBCardText>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// };

// export default CardExample;
import React from "react";
import "../components/Footer.css";

const About = () => {
  return (
    <div className=" about-mainbody ">
      <img
        cascade
        style={{ height: "35rem", width: "100%" }}
        src="https://cdn.cdnparenting.com/articles/2018/04/96524833-H-1024x700.jpg"
        alt=""
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
    </div>
  );
};

export default About;
