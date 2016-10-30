import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import promise from 'redux-promise';
import { addNote, removeNote, editNote, setEditable, fetchNotes } from './actions/index';
import notesReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(notesReducer);

const mapStateToProps = (state) => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) => {
      dispatch(addNote(text));
    },
    removeNote: (id) => {
      dispatch(removeNote(id));
    },
    editNote: (id, newText) => {
      dispatch(editNote(id, newText));
    },
    setEditable: (id) => {
      dispatch(setEditable(id));
    },
    fetchNotes: (count) => {
      dispatch(fetchNotes(count));
    }

  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
