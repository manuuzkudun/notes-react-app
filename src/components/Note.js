import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import { findDOMNode } from 'react-dom';
import { connector } from '../store';

class Note extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.randomBetween = this.randomBetween.bind(this);
  }

  randomBetween(min,max) {
    return (min + Math.ceil(Math.random() * max) );
  }

  componentDidMount() {
    $(findDOMNode(this)).draggable();
  }

  componentWillMount() {
    this.style = {
      right: `${this.randomBetween(0,window.innerWidth -150)}px`,
      top: `${this.randomBetween(0,window.innerHeight -150)}px`,
      transform: `rotate(${this.randomBetween(-15,15)}deg)`
    };
  }

  edit(){
    this.props.setEditable(this.props.id);
  }

  save(){
    this.props.editNote(this.props.id, findDOMNode(this.refs.newText).value);
  }

  remove(){
    this.props.removeNote(this.props.id);
  }

  renderDisplay() {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}
            className="btn btn-primary glyphicon glyphicon-pencil" />
          <button onClick={this.remove}
            className="btn btn-danger glyphicon glyphicon-trash" />
        </span>
      </div>
  )}

  renderForm() {
    return(
      <div className="note" style={this.style}>
        <textarea ref="newText"
          defaultValue={this.props.children}
          className="form-control">
        </textarea>
        <button onClick={this.save}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" >
        </button>
      </div>
  )}

  render() {
    return this.props.editable ? this.renderForm() : this.renderDisplay();
  }

}

Note.propTypes = {
  removeNote: React.PropTypes.func,
  editNote: React.PropTypes.func,
  setEditable: React.PropTypes.func,
  id: React.PropTypes.number,
  editable: React.PropTypes.bool
}

export default connector(Note)
