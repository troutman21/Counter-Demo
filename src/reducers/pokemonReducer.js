import types from '../actions/types';

const initialState = { pokemon: null };

const pokemonReducer = (previousState = initialState, action) => {
  console.log(`previousState from PokemonReducer: `, previousState);
  console.log(`action from PokemonReducer: `, action);
  switch (action.type) {
    case types.GET_POKEMON: {
      console.log(`made it to GET_POKEMON case`);
      // can't do a fetch call here because we need to return our piece of state
      return previousState;
    }
    default:
      return previousState;
  }
};

export default pokemonReducer;
