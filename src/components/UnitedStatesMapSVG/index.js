import React from 'react';
import './UnitedStatesMapSVG.css';
import states from './unitedStatesPaths';

const UnitedStatesMapSVG = () => (
  <svg
    aria-label="A map of the United States, showing which states I have visited."
    viewBox="0 0 1000 589"
  >
    {
      states.map(state => (
        <path
          key={state["id"]}
          id={state["id"]}
          data-name={state["data-name"]}
          data-id={state["id"]}
          d={state["d"]}
        />
      ))
    }
  </svg>
);

export default UnitedStatesMapSVG;