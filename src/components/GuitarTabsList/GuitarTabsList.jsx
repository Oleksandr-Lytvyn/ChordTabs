import { useState } from 'react';
import tabs from '../../db.json';
import { nanoid } from 'nanoid';

import { getChord } from '../GetChord/GetChord';

console.log(tabs);

const startChords = getChord('D', 'minor');

export const GuitarTabsList = () => {
  const [findedChords, setFindedChords] = useState(startChords);
  const onSubmit = (e) => {
    e.preventDefault();
    const key = e.target.key.value;
    const suffix = e.target.suffix.value;
    setFindedChords(getChord(key, suffix));
    e.target.reset();
  };
  return (
    <>
      <div>
        <ul>
          {tabs.suffixes.map((suffix) => {
            return <li key={nanoid()}>{suffix}</li>;
          })}
        </ul>
      </div>

      <form onSubmit={onSubmit} action="">
        <label htmlFor="">
          KEY
          <input type="text" name="key" />
        </label>

        <label htmlFor="">
          SUFFIX
          <input type="text" name="suffix" />
        </label>
        <button type="submit">O</button>
      </form>
      <div>
        <h1>
          {findedChords.key}_{findedChords.suffix}
        </h1>
        <ul>
          {findedChords.positions.length > 0 &&
            findedChords.positions.map((c) => {
              return <li key={nanoid()}>{c.midi}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

// export function GuitarTabsList({ chord: { positions, key, suffix } }) {
//   console.log(key);
//   return (
//     <div className="tabs_list">
//       <h2>
//         {key} {suffix}
//       </h2>
//       {positions.map((pos) => (
//         <GuitarTab position={pos} />
//       ))}
//     </div>
//   );
// }
