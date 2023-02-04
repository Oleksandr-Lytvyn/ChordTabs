import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';

export class WebMidi extends Component {
  playTestInstrument(note) {
    this.midiSounds.playChordNow(3, 55, 2.5);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.playTestInstrument.bind(this)}>Play</button>

        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </div>
    );
  }
}
