import React, { Component } from 'react';
import Count from './count';
import Decrement from './decrement';
import Increment from './increment';

class Level2 extends Component {
  render() {
    return (
      <div className="level2">
        <h4>I'm the level2 component</h4>
        <Count />
        <hr />
        <div id="button-container">
          <Decrement decrementCount={null} />
          <Increment incrementCount={null} />
        </div>
      </div>
    );
  }
}

export default Level2;
