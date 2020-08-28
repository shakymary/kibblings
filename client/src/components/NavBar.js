import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const adoption = () => history.push("/adoption");
  const mypets = () => history.push("/mypets");

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
            <Nav.Link onClick={adoption}>Adoption</Nav.Link>
          </Nav.Link>
          <Nav.Link>
            <Nav.Link onClick={mypets}>My Pets</Nav.Link>
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
