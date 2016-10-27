import { combineReducers } from 'redux';
import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, SET_EDITABLE } from '../actions/index';
const initialState = {notes: []}

const generateId = () => {
  return new Date().getTime();
};

function notesReducer(state = initialState, action) {
  let notes
  switch(action.type) {
    case ADD_NOTE:
      return Object.assign({},state,
        { notes: [...state.notes, { id: generateId(), note: action.payload, editable: false }]})
    case REMOVE_NOTE:
      return Object.assign({}, state,
        { notes: state.notes.filter(note => note.id !== action.payload )})
    case EDIT_NOTE:
      return Object.assign({},state,
        { notes: state.notes.map(note => {
          if (note.id === action.payload.id){
            note.note = action.payload.newText;
            note.editable = false;
          }
          return note;
        }
      )})
    case SET_EDITABLE:
      return Object.assign({}, state,
      { notes: state.notes.map( note => {
        if (note.id === action.payload){
          note.editable = true;
        }
        return note;
      })})
    default:
      return state;
  }
};

export default notesReducer;
