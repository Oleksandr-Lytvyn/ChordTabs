import tabs from '../../db.json';

export const getChord = (key, suffix) => {
  if (tabs.chords[key]) return tabs.chords[key].find((chord) => chord.suffix === suffix);
};
