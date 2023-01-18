import tabs from '../../db.json';
import ukuTabs from '../../db-ukulele.json';

export const getChord = (key, suffix, i) => {
  if (i === 'guit' && tabs.chords[key]) {
    return tabs.chords[key].find((chord) => chord.suffix === suffix);
  } else if (i === 'ukul' && ukuTabs.chords[key]) {
    return ukuTabs.chords[key].find((chord) => chord.suffix === suffix);
  }
};
