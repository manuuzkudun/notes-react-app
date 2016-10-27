import { combineReducers } from 'redux';
import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../actions/index';
const initialState = {notes: []}

const generateId = () => {
  return new Date().getTime();
}

function notesReducer(state = initialState, action) {
  let notes
  switch(action.type) {
    case ADD_NOTE:
      return Object.assign({},state,
        {notes: [...state.notes, { id: generateId(), note: action.payload }]})
    case REMOVE_NOTE:
      return Object.assign({},state,
        {notes: state.notes.filter(note => note.id !== action.payload )})
    case EDIT_NOTE:
      return Object.assign({},state,
        {notes: state.notes.map(note => {
          if (note.id === action.payload.index){
            note.note = action.payload.newText;
          }
          return note;
        }
      )})
    default:
      return state;
  }
};

export default notesReducer;
