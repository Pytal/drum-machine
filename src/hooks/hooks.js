import { useState } from 'react';
import { createContainer } from 'unstated-next';

const DrumHook = createContainer(useDrumHook);
function useDrumHook() {
  const [padclip, setPadclip] = useState('padclip');
  const mdownEvent = new MouseEvent('mousedown', { bubbles: true });
  const mupEvent = new MouseEvent('mouseup', { bubbles: true });

  document.addEventListener('keydown', event => keyDown(event));
  document.addEventListener('keyup', event => keyUp(event));

  function keyDown(event) {
    const pad = document.querySelector('#clip' + event.key.toUpperCase());
    if (pad) pad.dispatchEvent(mdownEvent);
  };

  function keyUp(event) {
    const pad = document.querySelector('#clip' + event.key.toUpperCase());
    if (pad) pad.dispatchEvent(mupEvent);
  };

  return { padclip }
};

export { DrumHook };
