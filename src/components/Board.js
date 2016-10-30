import React, { Component, PropTypes } from 'react';
import Note from './Note';
import { connector , store} from '../store';

class Board extends Component {
  componentDidMount() {
    if(this.props.count) {
      this.props.fetchNotes(this.props.count);
    }
  }

  render() {
    return (
      <div className="board"> {
        this.props.notes.map( note => (
          <Note
            key={note.id}
            id={note.id}
            editable={note.editable}>
            {note.note}
          </Note>))}
        <button
          onClick={this.props.addNote.bind(null,'New Note')}
          className="btn btn-sm btn-success glyphicon glyphicon-plus">
        </button>
      </div>
    )
  }

}

Board.propTypes = {
  count: PropTypes.number.isRequired,
  notes: PropTypes.arrayOf(React.PropTypes.object),
  addNote: PropTypes.func,
  fetchNotes: PropTypes.func
}

export default connector(Board)
