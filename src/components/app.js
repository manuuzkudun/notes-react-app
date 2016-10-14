import React, { Component } from 'react';
import Note from './Note';
import Checkbox from './Checkbox';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Note>Hello World!</Note> */}
        <Checkbox />
      </div>
    );
  }
}
