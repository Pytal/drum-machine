import React from 'react';
import './App.css';
import { DrumHook } from './hooks/hooks'

// TODO:

// DONE:


function DrumMachineDisplay() {
  const drumhook = DrumHook.useContainer();

  function click(event) {
    console.log( event.target );
  };

  const padsArr = [
    ['clip1', 'Q'], ['clip2', 'W'], ['clip3', 'E'],
    ['clip4', 'A'], ['clip5', 'S'], ['clip6', 'D'],
    ['clip7', 'Z'], ['clip8', 'X'], ['clip9', 'C']
  ];

  return (
    <div id='drum-machine'>
      <div id='display'>{drumhook.padclip}</div>
      <div className='buttons'>
        {padsArr.map( a =>
        <button onClick={click} id={a[0]} className='drum-pad'>
          <p id={a[1]}>{a[1]}</p>
        </button>
        )}
      </div>
    </div>
  )
};

function Display() {
  return (
    <div className='slate'>
      <DrumHook.Provider>
        <DrumMachineDisplay />
      </DrumHook.Provider>
    </div>
  )
};

export default Display;
