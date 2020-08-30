import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Axios from "axios";
// import Btn from "./components/Button"
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Forms from "./components/Form";
// import Card from "./components/Card";
import Adoption from "./Pages/Adoption";
import MyPets from "./Pages/MyPets";
import Home from "./Pages/Home";
import UserContext from "./Context/UserContext";
import Landing from "./Pages/Landing";
require("dotenv").config();

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();

    //////////////////////////////////////////////////////////////////////////////
    Axios.post("https://api.petfinder.com/v2/oauth2/token",

      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "client_credentials"
      }

    ).then((res) => {
      console.log(res.data.token_type);
      console.log(res.data.access_token);
      return { tokenType: res.data.token_type, accessToken: res.data.access_token }
    }).then((res) => {
      Axios.get("https://api.petfinder.com/v2/animals?type=dog&page=2", {
        headers: {
          Authorization: res.tokenType + " " + res.accessToken
        }
      }).then((res) => {
        console.log(res);
      })
    })
  }, []);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/mypets" component={MyPets} />
            <Route path="/adoption" component={Adoption} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
