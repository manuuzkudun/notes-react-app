import React, { Component } from 'react';

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
    let value = this.refs.newText.getDOMNode().value;
    alert(val);
    this.setState({editing: false});
  }

  remove(){
    alert('Removing note')
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
