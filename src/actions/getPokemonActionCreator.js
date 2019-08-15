import types from "./types";
// This action creator returns a function
// when it is dispatched from our pokemonButton component our redux-thunk middleware intercepts it
// then it calls it with "dispatch" as an argument.
// that function it just called must return a promise that will eventually be fulfilled.
// when it is fulfilled you can use the dispatch method again to dispatch some object to the reducers.
const getPokemonActionCreator = () => dispatch =>
  fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(res => res.json())
    .then(myJson => {
      console.log('myJson: ', myJson);
      console.log(`dispatch from pokemonAction: `, dispatch);
      // dispatch the myJson value to the reducers
      dispatch({ type: types.GET_POKEMON, payload: myJson });
    });

export default getPokemonActionCreator;
