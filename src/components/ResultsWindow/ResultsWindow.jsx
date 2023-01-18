import { GuitarTabsList } from '../GuitarTabsList/GuitarTabsList';
import { UkuleleTabsList } from '../UkuleleTabsList/UkuleleTabsList';

export const ResultsWindow = ({ i, ch }) => {
  return (
    <>
      {i === 'guit' && <GuitarTabsList chord={ch} />}
      {i === 'ukul' && <UkuleleTabsList />}
    </>
  );
};
