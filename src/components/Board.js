import React, { Component } from 'react';
import Note from './Note';
import { connector , store} from '../store';

class Board extends Component {

  componentWillMount() {
    var self = this;
    if(this.props.count) {
      $.getJSON("https://baconipsum.com/api/?type=all-meat&sentences=" +
        this.props.count + "&start-with-lorem=1&callback=?", results => {
          results[0].split('. ')
            .forEach( sentence => this.props.addNote(sentence.substring(0,40)) )
      });
    }
  }

  render() {
    return (
      <div className="board"> {
        this.props.notes.map( (note, i) => {
          return (
            <Note key={note.id} index={note.id}>
              {note.note}
            </Note>
          )
        })
      }
      <button
        onClick={this.props.addNote.bind(null,'New Note')}
        className="btn btn-sm btn-success glyphicon glyphicon-plus" />
      </div>
    )
  }
}

Board.propTypes = {
  count: React.PropTypes.number.isRequired,
  notes: React.PropTypes.arrayOf(React.PropTypes.object),
  addNote: React.PropTypes.func,
  removeNote: React.PropTypes.func,
  editNote: React.PropTypes.func
}

export default connector(Board)
