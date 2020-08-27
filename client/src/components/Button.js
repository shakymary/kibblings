import React from 'react'
import { Button } from "react-bootstrap"

const Btn = (props) => {
    return (
        //Make Components Customizable similar in this way
        <Button variant={props.variant}>{props.text}</Button>
    )
}

export default Btn



