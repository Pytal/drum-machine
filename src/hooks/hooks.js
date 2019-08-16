import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';

const DrumHook = createContainer(useDrumHook);
function useDrumHook() {
  const [padclip, setPadclip] = useState('');
  const padsReg = new RegExp('Q|W|E|A|S|D|Z|X|C', 'i');
  const mdownEvent = new MouseEvent('mousedown', { bubbles: true });
  const mupEvent = new MouseEvent('mouseup', { bubbles: true });

  function mouseHandler(e, down_or_up) {
    const pad = document.getElementById(e.target.id);
    const audio = document.getElementById(pad.children[1].id);
    if (down_or_up === 'down') {
      pad.classList.add('active');
      audio.currentTime = 0;
      audio.play();
      setPadclip( pad.getAttribute('data-clip') ); }
    else {
      pad.classList.remove('active');
    }
  };

  function keyHandler(e, down_or_up) {
    if ( e.key.length === 1 && padsReg.test(e.key) ) {
      const pad = document.getElementById('clip' + e.key.toUpperCase());
      down_or_up === 'down' ? pad.dispatchEvent(mdownEvent) : pad.dispatchEvent(mupEvent);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', e => keyHandler(e, 'down'));
    document.addEventListener('keyup', e => keyHandler(e, 'up'));  
  }, []); // eslint-disable-line

  return { padclip, mouseHandler }
};

export { DrumHook };
