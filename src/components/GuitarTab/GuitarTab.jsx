import { Finger } from '../Finger/Finger';
import { GuitarTabBg } from '../GuitarTabBg/GuitarTabBg';
import '../GuitarTab/GuitarTab.css';
import { BaseFret } from '../BaseFret/BaseFret';

export function GuitarTab({ position }) {
  return (
    <div className="tabBg">
      <BaseFret />
      {position.fingers.map((pos, index) => (
        <Finger finger={pos} fret={position.frets[index]} str={index} />
      ))}
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
