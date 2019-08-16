import types from '../actions/types';

const initialState = { counter: 0 };

const counterReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      const newState = Object.assign({}, previousState);
      newState.counter++;
      return newState;
    }
    case types.DECREMENT_COUNT: {
      const newState = Object.assign({}, previousState);
      newState.counter--;
      return newState;
    }
    default:
      return previousState;
  }
};

export default counterReducer;
