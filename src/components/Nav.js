import React from 'react';
import "./Nav.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Nav = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  return (
    <nav className=' indigo darken-1'>
     
        <p className='title'>
          <b>FrontEnd Challeng</b>
        </p>

      <a href='#' className='right sidenav-trigger show-on-large' data-target='menu-side'>
        <i className='material-icons white-text'>menu</i>
      </a>
      
      <ul className='sidenav' id='menu-side'>
        <li className="hide-on-small-only">
          <a href="#"><i className="material-icons">arrow_back</i></a>
        </li>
        <li>
          <p>Elemento</p>
        </li>
      </ul>
      
    </nav>
  );
}

export {Nav}

