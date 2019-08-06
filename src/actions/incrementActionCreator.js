import types from './types';

const incrementActionCreator = () => ({
  type: types.INCREMENT_COUNT,
  // if I needed to add any additional data to update state it would go here
  payload: null,
});

export default incrementActionCreator;
