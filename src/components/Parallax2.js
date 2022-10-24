import React from 'react';
import "./Parallax2.css"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Parallax2 = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  return (
    <>
      <div className="parallax-container">
        <div className="parallax"> 
          <img src={"https://images.unsplash.com/photo-1607799632518-da91dd151b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}/> 
        </div>
      </div>
    </>
  );
}

export {Parallax2}



