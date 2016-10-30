import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SET_EDITABLE = 'SET_EDITABLE';
export const FETCH_NOTES = "FETCH_NOTES";

const baseUrl = "https://baconipsum.com/api/";
export function fetchNotes(count) {
  const request = axios.get(`${baseUrl}?type=all-meat&sentences=${count}&start-with-lorem=1`);
  return {
    type: FETCH_NOTES,
    payload: request
  };
}

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
