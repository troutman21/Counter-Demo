import React, { Component } from 'react';
import store from '../store';
import Counter from '../containers/counter';
import Increment from '../containers/increment';
import Decrement from '../containers/decrement';

const App = () => (
  <div id="app">
    <Counter />
    <hr />
    <div id="button-container">
      <Decrement />
      <Increment />
    </div>
  </div>
);

export default App;
