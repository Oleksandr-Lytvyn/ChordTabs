import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';
import { GuitarTabsList } from '../GuitarTabsList/GuitarTabsList';
import { UkuleleTabsList } from '../UkuleleTabsList/UkuleleTabsList';

export class WebMidiWindow extends Component {
  playTestInstrument() {
    this.midiSounds.playChordNow(3, this.props.note, 2.5);
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        {/* <button onClick={this.playTestInstrument.bind(this)}>Play</button> */}
        {this.props.i === 'guit' && (
          <GuitarTabsList
            chord={this.props.ch}
            setNotes={this.props.setNotes}
            play={this.playTestInstrument.bind(this)}
          />
        )}
        {this.props.i === 'ukul' && <UkuleleTabsList chord={this.props.ch} />}
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </div>
    );
  }
}

// export const WebMidiWindow = () => {
//   return (
//       <div className="App">
//         <button onClick={this.playTestInstrument.bind(this)}>Play</button>
//         {this.props.children}
//         <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
//       </div>
//     );
// }
