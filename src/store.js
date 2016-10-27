import { createStore } from 'redux';
import { connect } from 'react-redux';
import { addNote, removeNote, editNote, setEditable } from './actions/index';
import notesReducer from './reducers/index';

const store = createStore(notesReducer);
const mapStateToProps = (state) => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) => {
      dispatch(addNote(text))
    },
    removeNote: (id) => {
      dispatch(removeNote(id))
    },
    editNote: (id, newText) => {
      dispatch(editNote(id, newText))
    },
    setEditable: (id) => {
      dispatch(setEditable(id))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
