import React from "react";
import { Button } from "react-bootstrap";

const Btn = ({ variant, text, onClick }) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {text}
    </Button>
  );
};

export default Btn;
