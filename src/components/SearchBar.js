import React, {useState} from 'react';
import axios from 'axios';

import { Results } from "../components/Results"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [ repos, setRepos ] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value)     
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
      setRepos(result);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <input 
          type="text" 
          placeholder="Buscar" 
          value={searchInput} 
          onChange={handleChange}
        />
        <button onClick={handleClick}>Buscar</button>
      </div>

      <Results repos={repos}/>
    </>
  );
}

export {SearchBar}