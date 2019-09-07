import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContexts';

const Decrement = props => {
  console.log(`CounterContext`, CounterContext);
  const { decrementCount } = useContext(CounterContext);
  console.log(`decrementCount`, decrementCount);
  return (
    <button id="decrement" onClick={decrementCount}>
      -1
    </button>
  );
};

export default Decrement;
