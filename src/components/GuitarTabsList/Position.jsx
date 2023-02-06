import { nanoid } from 'nanoid';

import { StyledPosition } from './GuitarTabsList.styled';
import { ChordGuitar } from '../ChordGuitar/ChordGuitar';

export const Position = ({ pos, play, setNotes }) => {
  const steps = [];
  for (let index = 0; index < pos.fingers.length; index++) {
    steps.push({ fret: pos.frets[index], finger: pos.fingers[index], baseFret: pos.baseFret });
  }
  // console.log(poss.midi);
  return (
    <>
      <StyledPosition>
        <h3>base fret {pos.baseFret}</h3>
        {/* <p>baseFret:{pos.baseFret}</p>
        <p>capo:{typeof pos.capo}</p>
        <p>barres:{pos.barres}</p> */}
        <ChordGuitar steps={steps} midi={pos.midi} play={play} setNotes={setNotes} />
        {/* <ul>
          {steps.map((step) => {
            return (
              <li key={nanoid()}>
                fret:{step.fret}
                <br />
                finger:{step.finger}
              </li>
            );
          })}
        </ul> */}
      </StyledPosition>
    </>
  );
};
