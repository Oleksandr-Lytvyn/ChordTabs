import clsx from 'clsx';
// import css from '../CreateFinger/CreateFinger.module.css';
import './Finger.css';

const strings = {
  0: 'string_none',
  1: 'string_one',
  2: 'string_two',
  3: 'string_three',
  4: 'string_four',
  5: 'string_five',
  6: 'string_six',
};
const frets = {
  0: 'fret_open',
  1: 'fret_one',
  2: 'fret_two',
  3: 'fret_three',
  4: 'fret_four',
  5: 'fret_five',
};

export function Finger({ finger, fret, str }) {
  console.log(finger, fret);
  const fin = strings[finger];
  const desiredFret = frets[fret] ? frets[fret] : 'fret_close';
  // console.log(fin, desiredFret);
  return <div className={clsx('string', fin, desiredFret)}>{finger}</div>;
}
