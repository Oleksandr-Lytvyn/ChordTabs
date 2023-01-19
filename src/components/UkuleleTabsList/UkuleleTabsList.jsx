import { nanoid } from 'nanoid';

// console.log(tabs);

export const UkuleleTabsList = ({ chord }) => {
  // console.log(chord);
  return (
    <>
      <div>
        <h1>Ukul</h1>
        <h2>
          {chord.key}_{chord.suffix}
        </h2>
        <ul>
          {Object.keys(chord).length > 0 &&
            chord.positions.map((position) => {
              return <li key={nanoid()}>{position.midi}</li>;
            })}
        </ul>
      </div>
    </>
  );
};
