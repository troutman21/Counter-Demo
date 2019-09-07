import React from 'react';
import { CounterContext } from '../contexts/CounterContexts';

const Increment = props => (
  <CounterContext.Consumer>
    {value => (
      <button id="increment" onClick={value.incrementCount}>
        +1
      </button>
    )}
  </CounterContext.Consumer>
);

export default Increment;
