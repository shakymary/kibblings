import React from "react";
import NavBar from "./components/NavBar";

// import Btn from "./components/Button"
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Forms from "./components/Form";
// import Card from "./components/Card";
import Adoption from "./Pages/Adoption";
import MyPets from "./Pages/MyPets";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Landing} />
          <Route path="/mypets" component={MyPets} />
          <Route path="/adoption" component={Adoption} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
