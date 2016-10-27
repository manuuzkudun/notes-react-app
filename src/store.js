import { createStore } from 'redux';
import { connect } from 'react-redux';
import { addNote, removeNote, editNote } from './actions/index';
import notesReducer from './reducers/index';

const store = createStore(notesReducer);
const mapStateToProps = (state) => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) => {
      dispatch(addNote(text))
    },
    removeNote: (index) => {
      dispatch(removeNote(index))
    },
    editNote: (index, newText) => {
      dispatch(editNote(index, newText))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
