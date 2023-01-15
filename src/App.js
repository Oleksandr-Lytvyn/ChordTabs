import { useEffect, useState } from 'react';

import { getChord } from './components/GetChord/GetChord';
import { GuitarTabsList } from './components/GuitarTabsList/GuitarTabsList';
import { Navigation } from './components/Navigation/Navigation';
import './index.css';

// const startChords = getChord('D', 'minor');

export function App() {
  const [key, setKey] = useState('A');
  const [suffix, setSuffix] = useState('minor');
  const [chord, setChord] = useState({});
  useEffect(() => {
    console.log('useEffect');
    setChord(getChord(key, suffix));
  }, [key, suffix]);

  return (
    <>
      <Navigation k={setKey} s={setSuffix} />
      <GuitarTabsList chord={chord} />
    </>
  );
}
