import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./Pages.css";

const Forms = (props) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={props.placeholder}
        className={props.className}
      />
      <Button type="submit">{props.btnSubmitText}</Button>
    </Form>
  );
};

const petForm = (props) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={props.placeholder}
        className={props.className}
      />
      <Form.Group controlId="name">
        <Form.Label>{props.name}</Form.Label>
        <Form.Control type="text" placeholder="eg. Buddy" />
      </Form.Group>
      <Form.Group controlId="age">
        <Form.Label>{props.age}</Form.Label>
        <Form.Control type="text" placeholder="eg. 5" />
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>{props.weight}</Form.Label>
        <Form.Control type="text" placeholder="eg. 10lbs" />
      </Form.Group>
      <Form.Group controlId="breed">
        <Form.Label>{props.breed}</Form.Label>
        <Form.Control type="text" placeholder="eg. Dachshund" />
      </Form.Group>
      <Form.Group controlId="color">
        <Form.Label>{props.color}</Form.Label>
        <Form.Control type="text" placeholder="eg. Black" />
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>{props.gender}</Form.Label>
        <Form.Control type="text" placeholder="eg. Male" />
      </Form.Group>
      <Form.Group controlId="birthday">
        <Form.Label>{props.birthday}</Form.Label>
        <Form.Control type="text" placeholder="eg. 9/18/2020" />
      </Form.Group>
      <Form.Group controlId="allergies">
        <Form.Label>{props.breed}</Form.Label>
        <Form.Control type="text" placeholder="eg. Penicillin" />
      </Form.Group>
      <Form.Group controlId="microchip">
        <Form.Label>{props.microchip}</Form.Label>
        <Form.Control type="text" placeholder="eg. 111-00-111" />
      </Form.Group>
      <Form.Group controlId="rabies">
        <Form.Label>{props.rabies}</Form.Label>
        <Form.Control type="text" placeholder="eg. 111-00-11" />
      </Form.Group>

      <Button type="submit">{props.btnSubmitText}</Button>
    </Form>
  );
};
export default Forms;
export { petForm };
