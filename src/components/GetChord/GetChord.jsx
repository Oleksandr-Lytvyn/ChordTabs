import tabs from '../../db.json';

export const getChord = (key, suffix) => {
  return tabs.chords[key].find((chord) => chord.suffix === suffix);
};
