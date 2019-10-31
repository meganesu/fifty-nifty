import React from 'react';
import UnitedStatesMapSVG from '../UnitedStatesMapSVG';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fifty Nifty</h1>
      <UnitedStatesMapSVG />
      <p id="source-link">View source on <a href="https://github.com/meganesu/fifty-nifty/">GitHub</a>.</p>
    </div>
  );
}

export default App;
