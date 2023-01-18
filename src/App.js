import { useEffect, useState } from 'react';

import { getChord } from './components/GetChord/GetChord';
import { Navigation } from './components/Navigation/Navigation';
import { ResultsWindow } from './components/ResultsWindow/ResultsWindow';
import './index.css';

// const startChords = getChord('D', 'minor');

export function App() {
  const [key, setKey] = useState('A');
  const [suffix, setSuffix] = useState('minor');
  const [chord, setChord] = useState({});
  const [instrument, setInstrument] = useState('guit');
  useEffect(() => {
    const findedChord = getChord(key, suffix, instrument);
    setChord(findedChord);
  }, [instrument, key, suffix]);

  return (
    <>
      <Navigation sk={setKey} k={key} ss={setSuffix} i={setInstrument} />
      {chord && <ResultsWindow ch={chord} i={instrument} />}
      {!chord && <div>no results</div>}
    </>
  );
}
