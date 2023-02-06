import { nanoid } from 'nanoid';

const Finger = ({ step }) => {
  const finger = {};
  if (step.fret === -1) {
    finger.vertical = '0';
  } else if (step.fret === 0) {
    finger.vertical = '0';
  } else if (step.fret === 1) {
    finger.vertical = '0px';
  } else if (step.fret === 2) {
    finger.vertical = '25px';
  } else if (step.fret === 3) {
    finger.vertical = '50px';
  } else if (step.fret === 4) {
    finger.vertical = '75px';
  }

  if (step.finger === 0) {
    finger.isFinger = false;
  } else if (step.finger === 1) {
    finger.isFinger = true;
    finger.finger = 1;
  } else if (step.finger === 2) {
    finger.isFinger = true;
    finger.finger = 2;
  } else if (step.finger === 3) {
    finger.isFinger = true;
    finger.finger = 3;
  } else if (step.finger === 4) {
    finger.isFinger = true;
    finger.finger = 4;
  }

  // console.log(step);

  return (
    <div
      style={{
        width: '16px',
        height: '16px',
        background: `${finger.isFinger ? 'green' : 'transparent'}`,
        transform: `translateY(${finger.vertical})`,
        textAlign: 'center',
        borderRadius: '50%',
        marginTop: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '7px solid transparent',
        boxSizing: 'border-box',
      }}
    >
      {finger.finger}
    </div>
  );
};

export const ChordGuitar = ({ steps, midi, play, setNotes }) => {
  return (
    <div style={{ display: 'flex', background: '#F0E9C6 ' }}>
      <div
        style={{
          width: ' 100px',
          height: '100px',
          background: `linear-gradient( 
#161515, 
transparent 3px), linear-gradient( 90deg, 
#100f0f, 
transparent 1px)`,
          backgroundSize: '16.6px 25px',
          backgroundPosition: '8px 0',
          display: 'flex',
          justifyContent: 'space-between',
          // flexGrow: '1',
        }}
        onClick={(e) => {
          setNotes(midi);
          setTimeout(() => {
            play();
          }, 100);
        }}
      >
        {steps.map((step) => {
          return <Finger key={nanoid()} step={step}></Finger>;
        })}
      </div>
    </div>
  );
};
