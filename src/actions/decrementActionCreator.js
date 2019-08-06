import types from './types';

const decrementActionCreator = () => ({
  type: types.DECREMENT_COUNT,
  // if I needed to add any additional data to update state it would go here
  payload: null,
});

export default decrementActionCreator;
