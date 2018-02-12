import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

const heroes = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, action.character];
    case REMOVE_CHARACTER:
      return state.filter(character => character.id !== action.character.id);
    default:
      return state;
  }
}

export default heroes;
