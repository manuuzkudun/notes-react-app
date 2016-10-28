/* eslint-env mocha */
const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const enzyme = require('enzyme')
const { render } = enzyme
const data = require('../public/data')
const ReactRedux = require('react-redux')
const { Provider } = ReactRedux
const Header = require('../js/Header')
const Store = require('../js/Store')
const { store, reducer } = Store
