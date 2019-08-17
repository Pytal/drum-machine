import './App.css';
import React from 'react';
import { DrumHook } from './hooks/hooks';


// TODO:

// DONE: ✅ implement keydown and keyup logic
//       ✅ improve pad styles and animations
//       ✅ implement play audio clip functionality
//       🆗 freeCC Feature Complete
//       ✅ change logic to allow overlapping audio plays
//       🔙 lower default volume
//       ✅ add color and scale to visual


function DrumMachineDisplay() {
  const drumhook = DrumHook.useContainer();

  const baseUrl = 'https://s3.amazonaws.com/freecodecamp/drums/';

  const padsArr = [
    {char: 'Q', color: 'cyan',       clip: 'Heater 1',     url: baseUrl+'Heater-1.mp3'},
    {char: 'W', color: 'magenta',    clip: 'Heater 2',     url: baseUrl+'Heater-2.mp3'},
    {char: 'E', color: 'yellow',     clip: 'Heater 3',     url: baseUrl+'Heater-3.mp3'},
    {char: 'A', color: 'aqua',       clip: 'Heater 4',     url: baseUrl+'Heater-4_1.mp3'},
    {char: 'S', color: 'lightcoral', clip: 'Clap',         url: baseUrl+'Heater-6.mp3'},
    {char: 'D', color: 'chartreuse', clip: 'Open HH',      url: baseUrl+'Dsc_Oh.mp3'},
    {char: 'Z', color: 'deeppink',   clip: 'Kick n\' Hat', url: baseUrl+'Kick_n_Hat.mp3'},
    {char: 'X', color: 'darkviolet', clip: 'Kick',         url: baseUrl+'RP4_KICK_1.mp3'},
    {char: 'C', color: 'dodgerblue', clip: 'Closed HH',    url: baseUrl+'Cev_H2.mp3'}
  ];

  return (
    <div id='drum-machine'>
      <div id='display'>
        <div id='display-text'>{drumhook.padclip}</div>
      </div>
      <div id='visual' style={{ backgroundColor: drumhook.viscolor }} />
      <div className='pad-grid'>
        {padsArr.map( a =>
        <button
          onMouseDown={ e => drumhook.mouseHandler(e, 'down')}
          onMouseUp={ e => drumhook.mouseHandler(e, 'up')}
          data-clip={a.clip} data-color={a.color} key={'clip' + a.char}
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
