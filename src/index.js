import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import Board from './components/Board';

ReactDOM.render(
  <Provider store={ store }>
    <Board count={5}/>
  </Provider>
  , document.querySelector('#react-container'));
