import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export const AccordParent = ({ children }) => {
  return <Accordion defaultActiveKey="0">{children}</Accordion>;
};

export const AccordChild = ({ subject, time, content, eventKey, onClick }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
        {time + "   |   " + subject}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          {content}
          <Button onClick={onClick} variant="danger" size="sm">
            Clear
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
