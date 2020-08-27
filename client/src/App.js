import React from "react";
import NavBar from "./components/NavBar";
import Btn from "./components/Button";
import Home from "./Pages/Home";
import MyPets from "./Pages/MyPets";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Forms from "./components/Form";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypets" component={MyPets} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </BrowserRouter>
      <NavBar
        link1="#adopt"
        link1Title="Adopt"
        link2="#login"
        link2Title="Login"
        link3="#register"
        link3Title="Register"
      />

      {/* JumboTron Section??? */}

      <Forms
        className="mr-sm-2"
        placeholder="Search for a pet"
        btnSubmitText="Pet Search"
      />

      <Card />
      <Btn text="Submit" variant="primary"></Btn>
    </div>
  );
}

export default App;
