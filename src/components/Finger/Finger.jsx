import clsx from 'clsx';

const frets = {
  0: 'fret_open',
  1: 'fret_one',
  2: 'fret_two',
  3: 'fret_three',
  4: 'fret_four',
  5: 'fret_five',
};

export function Finger({ finger, fret }) {
  const fingerClass = finger === 0 ? 'finger_none' : 'finger';
  const desiredFret = frets[fret] ? frets[fret] : 'fret_close';
  return <div className={clsx(fingerClass, desiredFret)}>{finger}</div>;
}
