import { GuitarTab } from '../GuitarTab/GuitarTab';

export function GuitarTabsList({ chord: { positions } }) {
  return (
    <div className="tabs_list">
      {positions.map((pos) => (
        <GuitarTab position={pos} />
      ))}
    </div>
  );
}
