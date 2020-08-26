import React from "react";
import NavBar from "./components/NavBar";
import Btn from "./components/Button";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Btn} />
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
