import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet"

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
        <Helmet>
          <title>GitHub API Challeng</title>
          <meta name="description" content="The objective of this app is viewing and navigating the contents of a public GitHub repository. The final user you can to browse among the folders of any repository and visualize the content of its different files."/>

          <meta property="og:url" content="https://tropipay-frontend-challenge.netlify.app/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="React App"/>
          <meta property="og:description" content="The objective of this app is viewing and navigating the contents of a public GitHub repository. The final user you can to browse among the folders of any repository and visualize the content of its different files."/>
          <meta property="og:image:secure_url" itemprop="image" content="https://i.imgur.com/JkY3Xsb.png"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="tropipay-frontend-challenge.netlify.app"/>
          <meta property="twitter:url" content="https://tropipay-frontend-challenge.netlify.app/"/>
          <meta name="twitter:title" content="React App"/>
          <meta name="twitter:description" content="The objective of this app is viewing and navigating the contents of a public GitHub repository. The final user you can to browse among the folders of any repository and visualize the content of its different files."/>
          <meta name="twitter:image" content="https://i.imgur.com/JkY3Xsb.png"/>
        </Helmet>
        
        <Header/>

        <PublicRepos/>

        <SearchBar/>
        
        <ContactMe/>

        <Parallax2/>

        <Footer/>
        <div 
          style={{display: "flex", justifyContent: "center", alignItems: "center" ,width: "22px", height: "22px", backgroundColor: "white", position: "fixed", bottom: "40px", right: "40px", zIndex: "2"}}><a href='#nav'><i className="fa-solid fa-circle-chevron-up indigo-text darken-4 fa-3x"></i></a></div>
      </React.Fragment>
    );
  }
}

export default App;
