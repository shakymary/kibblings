import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
const NavBar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const adoption = () => history.push("/adoption");
  const mypets = () => history.push("/mypets");
  const home = () => history.push("/home");
  const landing = () => history.push("/");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
    localStorage.setItem("auth-token", "");
  };
  return (
    <Navbar className="color-navBar" expand="lg">
      <Navbar.Brand onClick={landing}>
        {/* NAPOLEONS LOGO TESTING AREA */}
        {/* <img
          alt=""
          src="/KibblingsPotentialFaviconLogo.jpg"
          width="40"
          height="40"
          className="d-inline-block"
        />{' '}
        END OF TESTING AREA */}
        <i className="fas fa-paw"></i>
        Kibblings
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userData.user ? (
            <>
              <Nav.Link>
                <Nav.Link className="nav-links" onClick={home}>
                  Home
                </Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link className="nav-links" onClick={adoption}>
                  Adoption
                </Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link className="nav-links" onClick={mypets}>
                  My Pets
                </Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link className="nav-links" onClick={logout}>
                  Logout
                </Nav.Link>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <Login />
              </Nav.Link>
              <Nav.Link>
                <Register />
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
