import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SearchBar } from "./components/SearchBar"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>FronEnd Challenge</h1>
        <SearchBar></SearchBar>
      </React.Fragment>
    );
  }
}

export default App;