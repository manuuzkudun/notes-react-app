import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Note extends Component {
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
  }

  edit(){
    this.setState({editing: true});
  }

  save(){
    this.props.onChange(ReactDOM.findDOMNode(this.refs.newText).value,this.props.index);
    this.setState({editing: false});
  }

  remove(){
    this.props.onRemove(this.props.index);
  }

  renderDisplay() {
    return (
      <div className="note">
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
      <div className="note">
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
