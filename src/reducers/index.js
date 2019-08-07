import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
