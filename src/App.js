import React from 'react';
import { DrumHook } from './hooks/hooks';
import './App.css';


// TODO: 👉 explore display-text animations
//       👉 implement audio visualizer

// DONE: ✅ implement keydown and keyup logic
//       ✅ improve pad styles and animations
//       ✅ implement play audio clip functionality
//       🆗 freeCC Feature Complete


function DrumMachineDisplay() {
  const drumhook = DrumHook.useContainer();

  const baseUrl = 'https://s3.amazonaws.com/freecodecamp/drums/';

  const padsArr = [
    {char: 'Q', clip: 'Heater 1',     url: baseUrl + 'Heater-1.mp3'},
    {char: 'W', clip: 'Heater 2',     url: baseUrl + 'Heater-2.mp3'},
    {char: 'E', clip: 'Heater 3',     url: baseUrl + 'Heater-3.mp3'},
    {char: 'A', clip: 'Heater 4',     url: baseUrl + 'Heater-4_1.mp3'},
    {char: 'S', clip: 'Clap',         url: baseUrl + 'Heater-6.mp3'},
    {char: 'D', clip: 'Open HH',      url: baseUrl + 'Dsc_Oh.mp3'},
    {char: 'Z', clip: 'Kick n\' Hat', url: baseUrl + 'Kick_n_Hat.mp3'},
    {char: 'X', clip: 'Kick',         url: baseUrl + 'RP4_KICK_1.mp3'},
    {char: 'C', clip: 'Closed HH',    url: baseUrl + 'Cev_H2.mp3'}
  ];

  return (
    <div id='drum-machine'>
      <div id='display'>
        <div id='display-text'>{drumhook.padclip}</div>
      </div>
      <div id='visualizer' />
      <div className='pad-grid'>
        {padsArr.map( a =>
        <button
          onMouseDown={ e => drumhook.mouseHandler(e, 'down')}
          onMouseUp={ e => drumhook.mouseHandler(e, 'up')}
          data-clip={a.clip} key={'clip' + a.char}
          id={'clip' + a.char} className='drum-pad'>
          <div className='char'>{a.char}</div>
          <audio src={a.url} className='clip' id={a.char} />
        </button>
        )}
      </div>
    </div>
  )
};

function Display() {
  return (
    <div className='slate'>
      <div className='backdrop' />
      <DrumHook.Provider>
        <DrumMachineDisplay />
      </DrumHook.Provider>
    </div>
  )
};

export default Display;
