import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "@fortawesome/fontawesome-free/css/all.min.css";


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
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand onClick={landing}>
        {/* NAPOLEONS LOGO TESTING AREA */}
        {/* <img
          alt=""
          src="/KibblingsPotentialFaviconLogo.jpg"
          width="40"
          height="40"
          className="d-inline-block"
<<<<<<< HEAD
        />{" "}
=======
        />{' '}
<<<<<<< HEAD
>>>>>>> 260b62c3f95a1693586b307d5d1ca5ca01d42fc5
>>>>>>> alvaro-centeno-master
        {/* END OF TESTING AREA */}
=======
        
        END OF TESTING AREA */}
        <i class="fas fa-paw"></i>
>>>>>>> 7c4ceb44c0f12eee7805c6f0a1a6c126b021747b
        Kibblings
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userData.user ? (
            <>
              <Nav.Link>
                <Nav.Link onClick={home}>Home</Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link onClick={adoption}>Adoption</Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link onClick={mypets}>My Pets</Nav.Link>
              </Nav.Link>
              <Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
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
