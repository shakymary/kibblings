import React from "react";
import NavBar from "./components/NavBar";
// import Btn from "./components/Button";
import Home from "./Pages/Home";
import MyPets from "./Pages/MyPets";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
    </div>
  );
}

export default App;
