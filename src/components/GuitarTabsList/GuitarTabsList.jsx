import { nanoid } from 'nanoid';
import { StyledGuitarTabsList } from './GuitarTabsList.styled';
import { Position } from './Position';
export const GuitarTabsList = ({ chord, play, setNotes }) => {
  return (
    <>
      {!chord && <div>no results</div>}

      <StyledGuitarTabsList>
        {/* <h1>Guitar</h1> */}
        <h2>
          {chord.key} {chord.suffix}
        </h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {Object.keys(chord).length > 0 &&
            chord.positions.map((position) => {
              return (
                <li key={nanoid()}>
                  <Position pos={position} play={play} setNotes={setNotes} />
                </li>
              );
            })}
        </ul>
      </StyledGuitarTabsList>
    </>
  );
};
