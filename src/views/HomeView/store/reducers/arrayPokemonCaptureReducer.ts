/* eslint-disable prettier/prettier */
import {Pokemon} from '../../../../models/Pokemon';

const initialState = {arrayPokemonCaptured: []};

function setArrayPokemonCaptured(
  state = initialState,
  action: {type: string; value: any},
) {
  let nextState;
  switch (action.type) {
    case 'ADD_TO_LIST_POKEMON':
      nextState = {
        ...state,
        arrayPokemonCapture: [...state.arrayPokemonCaptured, action.value],
      };
      console.log('[store] Add to pokeons captured: ', action.value);
      return nextState || state; //Penser à retourner les deux
    case 'REMOVE_POKEMON_IN_LIST':
      nextState = {
        ...state,
        favoritesFilm: state.arrayPokemonCaptured.filter(
          (pokemon: Pokemon) => pokemon.id === action.value.id,
        ),
      };
      return nextState || state;
    default:
      return state;
  }
}

export default setArrayPokemonCaptured;
