import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from '../components/counter';
import Increment from '../components/increment';
import Decrement from '../components/decrement';

const App = () => (
  <Provider store={store}>
    <div id="app">
      <Counter />
      <hr />
      <div id="button-container">
        <Decrement />
        <Increment />
      </div>
    </div>
  </Provider>
);

export default App;
