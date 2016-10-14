import React, { Component } from 'react';

export default class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({checked: !this.state.checked})
  }

  render() {
    let msg = this.state.checked ? "Checked" : "Unchecked";
    return (
      <div>
      <p>{msg}</p>
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      </div>
    );
  }

};
