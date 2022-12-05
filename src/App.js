import { getChord } from './components/GetChord/GetChord';
import { GuitarTabsList } from './components/GuitarTabsList/GuitarTabsList';
// import db from './db.json';

// const chordPositions = db;
// console.log(chordPositions);
export function App() {
  return <GuitarTabsList chord={getChord('C', 'major')} />;
}
