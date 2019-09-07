import React, { Component } from 'react';
import Level2 from './levell2';

class Level1 extends Component {
  render() {
    return (
      <div className="level1">
        <h4>I'm the level1 component</h4>
        <Level2 />
      </div>
    );
  }
}

export default Level1;
