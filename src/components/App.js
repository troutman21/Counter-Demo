import React, { Component } from 'react';
import store from '../store';
import Counter from '../containers/counter';
import Increment from '../containers/increment';
import Decrement from '../containers/decrement';
import PokemonDisplay from '../containers/pokemonDisplay';

const App = () => (
  <div id="app">
    <Counter />
    <hr />
    <div id="button-container">
      <Decrement />
      <Increment />
    </div>
    <PokemonDisplay />
  </div>
);

export default App;
