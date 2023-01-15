import { getChord } from './components/GetChord/GetChord';
import { GuitarTabsList } from './components/GuitarTabsList/GuitarTabsList';
import './index.css';

// const chordPositions = db;
// console.log(chordPositions);
export function App() {
  return <GuitarTabsList chord={getChord('C', 'major')} />;
}
