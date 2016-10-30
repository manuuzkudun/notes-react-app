import { combineReducers } from 'redux';
import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE, SET_EDITABLE, FETCH_NOTES } from '../actions/index';
const initialState = {notes: []}

const generateId = () => {
  return Math.floor((Math.random() * 1000000000000000) + 1);
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
    case FETCH_NOTES:
      const sentences = action.payload.data[0].split('. ')
        .map( (sentence) => {
          return {
            id: generateId(),
            note: sentence.substring(0,40),
            editable: false
          }});
      return Object.assign({}, state, { notes: sentences });
    default:
      return state;
  }
};

export default notesReducer;
