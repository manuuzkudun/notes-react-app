import React, { Component } from 'react';

export default class Note extends Component {
  edit(){
    alert('Editing note')
  }

  remove(){
    alert('Removing note')
  }

  render() {
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
}
