import { createStore, combineReducers } from 'redux';
import Reducer from './reducers/counterReducer';

// if there were multiple reducers i would need to import all reducer
// functions into one file and use the combineReducers function from redux and
// then pass in that returned value to the createStore function here

const store = createStore(Reducer);

export default store;
