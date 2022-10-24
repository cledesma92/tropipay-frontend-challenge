import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { SearchBar } from "./components/SearchBar"
import { PublicRepos } from "./components/PublicRepos"
import { Parallax2 } from "./components/Parallax2"
import { ContactMe } from "./components/ContactMe"
import { Footer } from "./components/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>

        <PublicRepos/>

        <SearchBar/>
        
        <ContactMe/>

        <Parallax2/>

        <Footer/>
        <div 
          style={{display: "flex", justifyContent: "center", alignItems: "center" ,width: "22px", height: "22px", backgroundColor: "white", position: "fixed", bottom: "40px", right: "40px"}}><a href='#nav'><i class="fa-solid fa-circle-chevron-up indigo-text darken-4 fa-3x"></i></a></div>
      </React.Fragment>
    );
  }
}

export default App;
