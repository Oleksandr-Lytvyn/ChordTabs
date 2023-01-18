import tabs from '../../db.json';

export const getChord = (key, suffix) => {
  // console.log(tabs.chords[key].find((chord) => chord.suffix === suffix));
  return tabs.chords[key].find((chord) => chord.suffix === suffix);
};
