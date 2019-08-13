import React from 'react';
import { DrumHook } from './hooks/hooks';
import { animated } from 'react-spring';
import './App.css';


// TODO: 👉 add audio clips to pads

// DONE:


function DrumMachineDisplay() {
  const drumhook = DrumHook.useContainer();

  const padsArr = [
    {clip: 'clipQ', char: 'Q'}, {clip: 'clipW', char: 'W'}, {clip: 'clipE', char: 'E'},
    {clip: 'clipA', char: 'A'}, {clip: 'clipS', char: 'S'}, {clip: 'clipD', char: 'D'},
    {clip: 'clipZ', char: 'Z'}, {clip: 'clipX', char: 'X'}, {clip: 'clipC', char: 'C'}
  ];

  function click(event) {
    console.log( event.target.innerHTML.charAt(22) );
  };

  function mouseDown(event) {
    const pad = document.querySelector('#' + event.target.id)
    pad.classList.add('active');
  };

  function mouseUp(event) {
    const pad = document.querySelector('#' + event.target.id)
    pad.classList.remove('active');
  };

  return (
    <div id='drum-machine'>
      <animated.div id='display'>
        <div id='display-text'>{drumhook.padclip}</div>
      </animated.div>
      <div className='buttons'>
        {padsArr.map( a =>
        <animated.button onClick={click} onMouseDown={mouseDown} onMouseUp={mouseUp}
                         id={a.clip} className='drum-pad'>
          <div className='char' id={a.char}>{a.char}</div>
        </animated.button>
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
