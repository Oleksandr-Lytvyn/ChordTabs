import { useState } from 'react';
import { GuitarTabsList } from '../GuitarTabsList/GuitarTabsList';
import { UkuleleTabsList } from '../UkuleleTabsList/UkuleleTabsList';
import { WebMidiWindow } from '../WebMidiWindow/WebMidiWindow';

export const ResultsWindow = ({ i, ch }) => {
  const [notes, setNotes] = useState([55]);

  return (
    <>
      <WebMidiWindow i={i} ch={ch} note={notes} setNotes={setNotes}></WebMidiWindow>
    </>
  );
};
