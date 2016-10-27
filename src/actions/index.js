export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SET_EDITABLE = 'SET_EDITABLE';

export function addNote(text) {
  return {
    type: ADD_NOTE,
    payload: text
  };
}

export function removeNote(id) {
  return {
    type: REMOVE_NOTE,
    payload: id
  };
}

export function editNote(id, newText) {
  return {
    type: EDIT_NOTE,
    payload: { id, newText }
  };
}

export function setEditable(id) {
  return {
    type: SET_EDITABLE,
    payload: id
  };
}
