import tabs from '../../db.json';
import { nanoid } from 'nanoid';

console.log(tabs);

export const GuitarTabsList = ({ chord }) => {
  console.log(chord.length);
  return (
    <>
      <div>
        <h1>
          {chord.key}_{chord.suffix}
        </h1>
        <ul>
          {Object.keys(chord).length > 0 &&
            chord.positions.map((c) => {
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
