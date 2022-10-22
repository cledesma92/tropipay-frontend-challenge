import React, {useState, useEffect} from 'react';

import axios from 'axios';
import "./SearchBar.css"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


import { Results } from "../components/Results"

const SearchBar = () => {
  const [ searchInput, setSearchInput ] = useState('');
  const [ repos, setRepos ] = useState([]);
  /* const [ error, setError ] = useState() */
  const [ response, setResponse] = useState(false)

  React.useEffect(()=> {
    console.log("empezando estado")
    setTimeout(() => {
      setResponse(false);

      console.log("terminando validacion") 
    }, 3000)
  }, [])

  const handleChange = (e) => {
    setSearchInput(e.target.value)     
  };
  
  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setRepos(result);
      setResponse(true)
    } catch (err) {
      setRepos([]);
      setResponse(true)
      console.log(err)
    }
  };

  return (
    <>
      <div className="section white">
        <div className="row container">
          <h4 className="header"><b>GitHub repo browser</b></h4>
          <p className="grey-text text-darken-3 lighten-3">The objective of this app is viewing and navigating the contents of a public GitHub repository. The final user you can to browse among the folders of any repository and visualize the content of its different files.</p>
          <p className="grey-text text-darken-3 lighten-3">To navigate between the different public repositories you must first enter the username of a valid GitHub account.</p>
         
          <div /* style={{ padding: "20px" }} */>
            <input 
              type="text" 
              placeholder="Search username" 
              value={searchInput} 
              onChange={handleChange}
            />
            <button className="right btn waves-effect waves-light" onClick={handleClick}>Search <i className="material-icons right">search</i></button>
          </div>
        </div>
      </div>

      {response && (
        <Results repos={repos}/>
      )}
      
    </>
  );
}

export {SearchBar}