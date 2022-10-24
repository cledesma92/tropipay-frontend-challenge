import React, {useState, useEffect} from 'react';


import axios from 'axios';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { ResultsPublicRepos } from "../components/ResultsPublicRepos"

const PublicRepos = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  const [ publicRepos, setPublicRepos ] = useState([]);
  
  const [ responsePublicRepos, setResponsePublicRepos] = useState(false)

  React.useEffect(()=> {
    console.log("empezando estado")
    setTimeout(() => {
      setResponsePublicRepos(false);
    }, 3000)  
      console.log("terminando validacion") 
  }, [])


  const loadPubliRepos = async () => {
    console.log("click")

    try {
      const result = await axios(`https://api.github.com/repositories`);
      setPublicRepos(result)
      setResponsePublicRepos(true)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div  className="section grey lighten-4">
      <div className="row container grey-text text-darken-3 lighten-3">
        <h4 id='one'><b>GitHub public repos</b></h4>
        <p >The objective of this app is viewing and navigating the contents of a public GitHub repository. The final user you can to browse among the folders of any repository and visualize the content of its different files.
        </p>
        <h5>Specifications:</h5>
        <ul>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>The public GitHub API is used.</li>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>Any public repo on GitHub can be viewed.</li>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>You can navigate between the repository folders.</li>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>This project is developed in react</li>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>Materialize was used for the CSS.</li>
          <li style={{ display: "flex", alignItems: "center"}}><i style={{marginRight: "5px"}} className="tiny material-icons green-text">check_box</i>You can open and view the contents of any file in a repository.</li>
        </ul>
        <p style={{display: "inline"}} >Show list of public repositories:</p>
          <button 
            onClick={loadPubliRepos} 
            style={{display: "inline", marginLeft: "15px", padding: "0px 5px 0px 5px"}}
            data-target="modal1" 
            className="btn modal-trigger waves-effect waves-light indigo darken-1"
          >
            <i style={{fontSize: "2rem"}} className="material-icons">format_list_numbered</i>
          </button>
        <div id="modal1" className="modal">
          {responsePublicRepos && (
            <ResultsPublicRepos publicRepos={publicRepos}/>
          )}
        </div>
      </div>
    </div>
  );
}

export {PublicRepos}