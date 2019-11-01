import React from 'react';
import UnitedStatesMapSVG from '../UnitedStatesMapSVG';
import statesVisited from './statesVisited';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fifty Nifty</h1>
      <p>One of the things on my bucket list is to visit all 50 states in the U.S.</p>
      <p>I've started many physical lists to keep track of which states I've been to so far, but I keep forgetting where I put them, so I've decided to use the Internet to keep track instead!</p>
      <UnitedStatesMapSVG statesVisited={statesVisited} />
      <p id="source-link">View source on <a href="https://github.com/meganesu/fifty-nifty/">GitHub</a>.</p>
    </div>
  );
}

export default App;
