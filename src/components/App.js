import React, { Component } from 'react';
import Level1 from './level1';
import CounterContextProvider from '../contexts/CounterContexts';

class App extends Component {
  render() {
    return (
      <CounterContextProvider>
        <div id="app">
          <Level1 />
        </div>
      </CounterContextProvider>
    );
  }
}

export default App;
