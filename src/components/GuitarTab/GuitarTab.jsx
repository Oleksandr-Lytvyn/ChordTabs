import { Finger } from '../Finger/Finger';
import { GuitarTabBg } from '../GuitarTabBg/GuitarTabBg';
import { BaseFret } from '../BaseFret/BaseFret';

export function GuitarTab({ position }) {
  return (
    <div className="chord">
      <BaseFret fret={position.baseFret} />
      <div className="tabBg">
        {position.fingers.map((pos, index) => (
          <Finger finger={pos} fret={position.frets[index]} str={index} />
        ))}
      </div>
    </div>
  );
}

// return position.fingers.map((pos, index) => {
//     return (
//       // <div className="tabBg">
//       <Finger finger={pos} fret={position.frets[index]} />
//       // </div>
//     );
//   });
// }
