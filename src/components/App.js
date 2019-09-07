import React, { useContext, useEffect } from 'react';
import Level1 from './level1';
import CounterContextProvider, {
  CounterContext,
} from '../contexts/CounterContexts';

const App = props => (
  <CounterContextProvider>
    <div id="app">
      <Level1 />
    </div>
  </CounterContextProvider>
);

export default App;
