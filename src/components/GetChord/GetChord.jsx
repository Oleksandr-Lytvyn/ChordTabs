import db from '../../db.json';

export function getChord(key, suffix) {
  const chordKey = db.chords[key];
  return chordKey.find((option) => option.suffix === suffix);
}
export function getTabs() {
  console.log(db);
}
