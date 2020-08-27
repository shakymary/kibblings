import React from "react";
import NavBar from "./components/NavBar";
import Btn from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* JumboTron Section??? */}
      <Btn text="Submit" variant="primary"></Btn>
      <Footer />
    </div>
  );
}

export default App;
