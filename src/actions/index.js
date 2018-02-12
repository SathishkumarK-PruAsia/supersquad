export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacter(character) {
  return {
    type: ADD_CHARACTER,
    character
  };
}

export function removeCharacter(character) {
  return {
    type: REMOVE_CHARACTER,
    character
  };
}
