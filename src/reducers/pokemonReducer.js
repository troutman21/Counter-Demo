import types from '../actions/types';

const initialState = { pokemon: null };

const pokemonReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case types.GET_POKEMON: {
      // can't do a fetch call here because we need to return our piece of state
      return { pokemon: action.payload };
    }
    default:
      return previousState;
  }
};

export default pokemonReducer;
