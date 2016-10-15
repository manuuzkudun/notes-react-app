import React, { Component } from 'react';
import Note from './Note';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        'Finish Resume',
        'Call family',
        'Buy onions',
        'Clean bathroom'
      ]
    };
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.eachNote = this.eachNote.bind(this);
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

  update(newText,i) {
    let arr = this.state.notes;
    arr[i] = newText;
    this.setState({notes: arr});
  }

  remove(i) {
    let arr = this.state.notes;
    arr.splice(i,1);
    this.setState({notes:arr});
  }

  eachNote(note,i) {
    return (
      <Note key={i}
        index={i}
        onChange={this.update}
        onRemove={this.remove}>
        {note}
      </Note>
    );
  }

  render() {
    return (
        <div className="board"> {
          this.state.notes.map( this.eachNote )
        }</div>
    );
  }
}
