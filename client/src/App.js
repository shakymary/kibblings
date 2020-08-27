import React from "react";
import NavBar from "./components/NavBar";
<<<<<<< HEAD
import Btn from "./components/Button";
import Footer from "./components/Footer";
=======
// import Btn from "./components/Button";
import Home from "./Pages/Home";
import MyPets from "./Pages/MyPets";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Forms from './components/Form'
import Card from './components/Card'
>>>>>>> 77988eb5fbbcf4a822edec1a16c6d093d0904585

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
        link1='#adopt' link1Title='Adopt'
        link2='#login' link2Title='Login'
        link3='#register' link3Title='Register' />

      {/* JumboTron Section??? */}
<<<<<<< HEAD
      <Btn text="Submit" variant="primary"></Btn>
      <Footer />
=======

      <Forms
        className='mr-sm-2'
        placeholder='Search for a pet'
        btnSubmitText='Pet Search'
      />

      <Card />
      <Btn text="Submit"
        variant="primary">
      </Btn>
>>>>>>> 77988eb5fbbcf4a822edec1a16c6d093d0904585
    </div>
  );
}

export default App;
