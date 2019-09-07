import React, { useReducer, useEffect } from 'react';
import Count from './count';
import Increment from './increment';
import Decrement from './decrement';
import countReducer from '../reducers/countReducer';
import changeCountActionCreator from '../action-creators/change-count-action-creator';

const App = props => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    counterStatus: 'Neutral 😐',
  });

  useEffect(() => {
    document.title = state.counterStatus;
  });

  return (
    <div id="app">
      <Count count={state.count} />
      <hr />
      <div id="button-container">
        <Decrement
          decrementCount={() => dispatch(changeCountActionCreator('decrement'))}
        />
        <Increment
          incrementCount={() => dispatch(changeCountActionCreator('increment'))}
        />
      </div>
    </div>
  );
};

export default App;
