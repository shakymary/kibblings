import React from "react";
import { Button } from "react-bootstrap";


const Btn = ({ variant, text }) => {
    return <Button variant={variant}>{text}</Button>;
};

export default Btn;
