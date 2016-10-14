import React, { Component } from 'react';

var MessageBox = React.createClass({
  getInitialState: function() {
    return {checked: true};
  },
  handleCheck: function() {
    this.setState({checked: !this.state.checked})
  },
  render: function() {
    let msg = this.state.checked ? "Checked" : "Unchecked";
    return (
      <div>
      <p>{msg}</p>
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      </div>
    );
  }
});

export default MessageBox;
