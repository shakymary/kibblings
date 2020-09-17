import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { NotifContainer } from "../components/Modal";
import Notification from "../components/Notification";
import Axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./NavBar.css";

const NavBar = () => {
  const [reminders, setReminders] = useState([]);
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

  const renderReminders = async () => {
    await Axios.get("/users/viewReminder", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setReminders(res.data.reminders);
    });
  };

  useEffect(() => {
    renderReminders();
  }, []);

  return (
    <Navbar className="NavBar" bg="primary" expand="lg">
      <Navbar.Brand
        onClick={landing}
        style={{ color: "white", fontWeight: "bold" }}
        className="NavBar"
      >
        {/* <i className="fas fa-paw"></i> */}
        🐾 Kibblings
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
                <NotifContainer>
                  {/* {reminders.map((item, index) => {
                    return (
                      <Notification
                        key={index}
                        title={item.subject}
                        message={item.note}
                        text={item.time}
                      />
                    );
                  })} */}
                </NotifContainer>
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
