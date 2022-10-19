import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SearchBar } from "./components/SearchBar"
import { Results } from "./components/Results"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>FronEnd Challenge</h1>
        <SearchBar/>
        <Results/> 
      </React.Fragment>
    );
  }
}

export default App;
