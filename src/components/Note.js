import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connector } from '../store';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

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
    $(ReactDOM.findDOMNode(this)).draggable();
  }

  componentWillMount() {
    this.style = {
      right: `${this.randomBetween(0,window.innerWidth -150)}px`,
      top: `${this.randomBetween(0,window.innerHeight -150)}px`,
      transform: `rotate(${this.randomBetween(-15,15)}deg)`
    };
  }

  edit(){
    this.setState({editing: true});
  }

  save(){
    this.props.editNote(this.props.index, ReactDOM.findDOMNode(this.refs.newText).value);
    this.setState({editing: false});
  }

  remove(){
    this.props.removeNote(this.props.index);
  }
  renderDisplay() {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}/>
          <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}/>
        </span>
      </div>
    );
  }

  renderForm() {
    return(
      <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
  }

  render() {
    if (this.state.editing){
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

Note.propTypes = {
  addNote: React.PropTypes.func,
  removeNote: React.PropTypes.func,
  editNote: React.PropTypes.func,
  index: React.PropTypes.number
}

export default connector(Note)
