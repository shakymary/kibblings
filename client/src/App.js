import React from 'react';
import NavBar from './components/NavBar'
import Btn from './components/Button'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* JumboTron Section??? */}
      <Btn text="Submit"
        variant="primary">
      </Btn>
    </div>
  );
}

export default App;