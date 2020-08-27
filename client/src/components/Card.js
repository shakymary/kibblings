import React from 'react'
import { Card } from 'react-bootstrap';

const Cards = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.petName}</Card.Title>
                <Card.Text>
                    {props.petBreed}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards;
