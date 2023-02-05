import { nanoid } from 'nanoid';

const Finger = ({ step }) => {
  const finger = {};
  if (step.fret === -1) {
    finger.vertical = '0';
  } else if (step.fret === 0) {
    finger.vertical = '0';
  } else if (step.fret === 1) {
    finger.vertical = 'opx';
  } else if (step.fret === 2) {
    finger.vertical = '25px';
  } else if (step.fret === 3) {
    finger.vertical = '50px';
  } else if (step.fret === 4) {
    finger.vertical = '75px';
  }

  if (step.finger === 0) {
    finger.isFinger = false;
  } else if (step.finger > 0) {
    finger.isFinger = true;
  }

  return (
    <div
      style={{
        width: '16px',
        height: '20px',
        background: `${finger.isFinger ? 'green' : 'transparent'}`,
        transform: `translateY(${finger.vertical})`,
      }}
    ></div>
  );
};

export const ChordGuitar = ({ steps, midi, play, setNotes }) => {
  console.log(midi);
  return (
    <div
      style={{
        width: ' 100px',
        height: '100px',
        background: '#D3F6EE',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      onClick={(e) => {
        setNotes(midi);
        play();
      }}
    >
      {steps.map((step) => {
        return <Finger key={nanoid()} step={step} />;
      })}
    </div>
  );
};
