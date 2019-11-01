import React from 'react';
import states from './unitedStatesPaths';
import './UnitedStatesMapSVG.css';

const UnitedStatesMapSVG = ({ statesVisited }) => (
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
          className={statesVisited.includes(state["data-name"]) ? "visited" : null }
        />
      ))
    }
  </svg>
);

export default UnitedStatesMapSVG;