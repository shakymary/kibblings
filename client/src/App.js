import React from 'react';
import NavBar from './components/NavBar'
import Btn from './components/Button'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* JumboTron Section??? */}
      <Card />
      <Btn text="Submit"
        variant="primary">
      </Btn>
    </div>
  );
}

export default App;