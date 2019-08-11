import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';

const DrumHook = createContainer(useDrumHook);
function useDrumHook() {
  const [padclip, setPadclip] = useState('pad audio clip');

  useEffect(() => { document.addEventListener('keypress', (event) => keyPress(event)) }, []);

  function keyPress(event) {
    console.log( event.key )
  };

  return { padclip }
};

export { DrumHook };
