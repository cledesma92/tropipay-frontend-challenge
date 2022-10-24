import React from 'react';
import "./Parallax1.css"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Parallax1 = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  return (
    <>
      <div className="parallax-container">
        <div className="parallax"> 
          <img src={"https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}/> 
        </div>
      </div>
    </>
  );
}

export {Parallax1}



