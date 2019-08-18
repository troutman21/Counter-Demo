import React, { useState, useEffect } from 'react';
import Count from './count';
import Increment from './increment';
import Decrement from './decrement';

const App = props => {
  // The useState hook returns an array. It's first element is or state value and it's second value is a function that can update that count. We are using array deconstruction to save those values in a variables count, and setCount.
  const [count, setCount] = useState(0);
  const [countStatus, setCountStatus] = useState('Neutral');

  useEffect(() => {
    document.title = countStatus;
  });

  return (
    <div id="app">
      <Count count={count} />
      <hr />
      <div id="button-container">
        <Decrement
          decrementCount={() => {
            setCount(count - 1);
            setCountStatus('Going Down!');
          }}
        />
        <Increment
          incrementCount={() => {
            setCount(count + 1);
            setCountStatus('Going Up!');
          }}
        />
      </div>
    </div>
  );
};

export default App;
