import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export const Forms = (props) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
      />
      <Button type="submit" onClick={props.onClick}>
        {props.btnSubmitText}
      </Button>
    </Form>
  );
};

export const PetForm = () => {
  const vaccineLabels = [
    "Rabies",
    "Distemper",
    "Hepatitis/Adenovirus",
    "Parvovirus",
    "Parainfluenza",
    "Bordetella",
    "Leptospirosis",
    "Lyme Disease",
    " Coronavirus",
    "Giardia",
    "Canine Infuenza H3N8",
  ];
  return (
    <Form>
      <div className="ml-4 mr-4">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="eg. Buddy" />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="eg. 5" />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="eg. 10lbs" />
        </Form.Group>

        <Form.Group controlId="breed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="eg. Dachshund" />
        </Form.Group>
        <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="eg. Black" />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select">
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="birthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="text" placeholder="eg. 9/18/2020" />
        </Form.Group>
        <Form.Group controlId="microchip">
          <Form.Label>Microchip</Form.Label>
          <Form.Control type="text" placeholder="eg. 111-00-111" />
        </Form.Group>
        <Form.Group controlId="vaccines">
          <Form.Label>Vaccines</Form.Label>

          {vaccineLabels.map((vacc) => {
            return (
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  {vacc}
                </label>
              </div>
            );
          })}
        </Form.Group>
        <Form.Group controlId="allergies">
          <Form.Label>Allergies</Form.Label>
          <Form.Control type="text" placeholder="eg. Penicillin" />
        </Form.Group>
        <Form.Group controlId="rabies">
          <Form.Label>Rabies</Form.Label>
          <Form.Control type="text" placeholder="eg. 111-00-11" />
        </Form.Group>

        <Button type="submit" className="btn btn-primary mb-3">
          Submit
        </Button>
      </div>
    </Form>
  );
};

// export const PetForm = (props) => {
//   return (
//     <Modal.Dialog>
//       <Form>
//         <div className="ml-4 mr-4">
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="eg. Buddy" />
//           </Form.Group>

//           <Form.Group controlId="age">
//             <Form.Label>Age</Form.Label>
//             <Form.Control type="text" placeholder="eg. 5" />
//           </Form.Group>
//           <Form.Group controlId="weight">
//             <Form.Label>Weight</Form.Label>
//             <Form.Control type="text" placeholder="eg. 10lbs" />
//           </Form.Group>

//           <Form.Group controlId="breed">
//             <Form.Label>Breed</Form.Label>
//             <Form.Control type="text" placeholder="eg. Dachshund" />
//           </Form.Group>
//           <Form.Group controlId="color">
//             <Form.Label>Color</Form.Label>
//             <Form.Control type="text" placeholder="eg. Black" />
//           </Form.Group>
//           <Form.Group controlId="gender">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control as="select">
//               <option>Male</option>
//               <option>Female</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="birthday">
//             <Form.Label>Birthday</Form.Label>
//             <Form.Control type="text" placeholder="eg. 9/18/2020" />
//           </Form.Group>
//           <Form.Group controlId="allergies">
//             <Form.Label>Allergies</Form.Label>
//             <Form.Control type="text" placeholder="eg. Penicillin" />
//           </Form.Group>
//           <Form.Group controlId="microchip">
//             <Form.Label>Microchip</Form.Label>
//             <Form.Control type="text" placeholder="eg. 111-00-111" />
//           </Form.Group>
//           <Form.Group controlId="rabies">
//             <Form.Label>Rabies</Form.Label>
//             <Form.Control type="text" placeholder="eg. 111-00-11" />
//           </Form.Group>

//           <Button type="submit" className="btn btn-primary mb-3">
//             {props.btnSubmitText}
//           </Button>
//         </div>
//       </Form>
//     </Modal.Dialog>
//   );
// };
