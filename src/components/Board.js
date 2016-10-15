import React, { Component } from 'react';
import Note from './Note';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.eachNote = this.eachNote.bind(this);
    this.nextId = this.nextId.bind(this);
  }

  static propTypes = {
   count: (props,propName) => {
     if (typeof props[propName] !== 'number') {
       return new Error('The count property must be a number');
     }
     if (props[propName] > 100) {
       return new Error(`Creating ${props[propName]} notes is rdiculous`);
     }
   }
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add(text) {
    let arr = this.state.notes;
    arr.push({
      id: this.nextId(),
      note: text
    });
    this.setState(arr);
  }

  update(newText,i) {
    let arr = this.state.notes;
    arr[i].note = newText;
    this.setState({notes: arr});
  }

  remove(i) {
    let arr = this.state.notes;
    arr.splice(i,1);
    this.setState({notes:arr});
  }

  eachNote(note,i) {
    return (
      <Note key={note.id}
        index={i}
        onChange={this.update}
        onRemove={this.remove}>
        {note.note}
      </Note>
    );
  }

  render() {
    return (
        <div className="board"> {
          this.state.notes.map( this.eachNote )
        }
        <button onClick={this.add.bind(null,'New Note')} className="btn btn-sm btn-success glyphicon glyphicon-plus" />
        </div>

    );
  }
}
