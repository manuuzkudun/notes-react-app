export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export function addNote(text) {
  return {
    type: ADD_NOTE,
    payload: text
  };
}

export function removeNote(index) {
  return {
    type: REMOVE_NOTE,
    payload: index
  };
}

export function editNote(index, newText) {
  return {
    type: EDIT_NOTE,
    payload: { index, newText }
  };
}
