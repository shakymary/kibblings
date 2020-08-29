import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
const NavBar = () => {
<<<<<<< HEAD
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
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={landing}>Kibblings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
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
=======
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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={home}>Kibblings</Navbar.Brand>
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
>>>>>>> 3e46f527b14dc8f51dd2572174f23d39c9ebd193
};
export default NavBar;
