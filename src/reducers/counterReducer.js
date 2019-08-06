import types from '../actions/types';

const initialState = { counter: 0 };

const counterReducer = (previousState = initialState, action) => {
  console.log(`previousState: `, previousState);
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      console.log(`made it to increment reducer`);
      const newState = Object.assign({}, previousState);
      newState.counter++;
      return newState;
    }
    case types.DECREMENT_COUNT: {
      console.log(`made it to decrement reducer`);
      const newState = Object.assign({}, previousState);
      newState.counter--;
      return newState;
    }
    default:
      return previousState;
  }
};

export default counterReducer;
