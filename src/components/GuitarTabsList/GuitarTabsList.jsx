import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { ChordGuitar } from '../ChordGuitar/ChordGuitar';

const StyledPosition = styled.div`
  background-color: #ddd4d4;
  width: 200px;
  height: 200px;
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledGuitarTabsList = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

const Position = ({ pos }) => {
  // console.log(pos);
  const steps = [];
  for (let index = 0; index < pos.fingers.length; index++) {
    steps.push({ fret: pos.frets[index], finger: pos.fingers[index] });
  }
  return (
    <>
      <StyledPosition>
        <h3>Position</h3>
        <p>baseFret:{pos.baseFret}</p>
        <p>capo:{typeof pos.capo}</p>
        <p>barres:{pos.barres}</p>
        <ChordGuitar steps={steps} />
        <ul>
          {steps.map((step) => {
            return (
              <li key={nanoid()}>
                fret:{step.fret}
                <br />
                finger:{step.finger}
              </li>
            );
          })}
        </ul>
      </StyledPosition>
    </>
  );
};

export const GuitarTabsList = ({ chord }) => {
  return (
    <>
      <StyledGuitarTabsList>
        <h1>Guitar</h1>
        <h2>
          {chord.key}_{chord.suffix}
        </h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {Object.keys(chord).length > 0 &&
            chord.positions.map((position) => {
              return (
                <li key={nanoid()}>
                  <Position pos={position} />
                </li>
              );
            })}
        </ul>
      </StyledGuitarTabsList>
    </>
  );
};
