import React, {useState, useEffect} from 'react';

import axios from 'axios';
import "./SearchBar.css"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


import { Results } from "../components/Results"

const SearchBar = () => {
  const [ searchInput, setSearchInput ] = useState('');
  const [ repos, setRepos ] = useState([]);

  const [ response, setResponse] = useState(false)

  React.useEffect(()=> {
    setTimeout(() => {
      setResponse(false);
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
      <div className="section grey lighten-4">
        <div className="row container grey-text text-darken-3 lighten-3">         
            <h4 id='two'><b>Repo browser per owner</b></h4>
            <p className="grey-text text-darken-3 lighten-3">It is also possible to navigate between the different public repositories of any user by simply entering the username of the owner of a valid GitHub account in the search bar. For example, my username is: <i><b>cledesma92</b></i></p>
            <input 
              className='searchBar'
              type="text" 
              placeholder="Search username" 
              value={searchInput} 
              onChange={handleChange}
            />
            <button className="right btn waves-effect waves-light indigo darken-1" onClick={handleClick}>Search <i className="material-icons right">search</i></button>
          
        </div>
      </div>

      {response && (
        <Results repos={repos}/>
      )}
      
    </>
  );
}

export {SearchBar}