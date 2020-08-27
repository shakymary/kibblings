import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Kibblings</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Register />
          </Nav.Link>
          <Nav.Link>
            <Nav.Link href="/mypets">MyPets</Nav.Link>
          </Nav.Link>
          <Nav.Link>
            <Login />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
