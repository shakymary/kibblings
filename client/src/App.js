import React from "react";
import NavBar from "./components/NavBar";
// import Btn from "./components/Button"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Forms from "./components/Form";
import Card from "./components/Card";
import Adoption from "./Pages/Adoption";
import MyPets from "./Pages/MyPets";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypets" component={MyPets} />
          <Route path="/adoption" component={Adoption} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
