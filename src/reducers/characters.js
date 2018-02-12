import characters_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

const characters = (state = characters_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter(character => character.id !== action.character.id);
    case REMOVE_CHARACTER:
      return [...state, action.character];
    default:
      return state;
  }
}

export default characters;
