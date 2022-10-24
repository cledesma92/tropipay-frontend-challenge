import React from 'react';
import "./Nav.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Nav = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems);
  });

  const click_event = new CustomEvent('click');

  const toggleMenu = () => {
    console.log("Click en el menu")
    document.querySelector(".sidenav-overlay").dispatchEvent(click_event);
  }

  return (
    <nav id='nav' className='indigo darken-1 '>
     
        <p className='title'>
          <b>FrontEnd Challeng</b>
        </p>

      <a href='#' className='right sidenav-trigger show-on-large' data-target='menu-side'>
        <i className='material-icons white-text'>menu</i>
      </a>
      
      <ul className='sidenav grey lighten-3' id='menu-side'>
        <li>
          <div className='user-view'>
            <div className='background'>
              <img style={{width: "100%" ,objectFit: "cover"}}  src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80"/>
            </div>
              <img style={{width: "80px", height: "80px"}} src="https://avatars.githubusercontent.com/u/72166232?v=4"/>
              <span style={{marginTop: "0px"}} className='name white-text'><b>Christian David</b></span>
              <span className='email white-text'>Full Stack Developer</span>
            
          </div>
        </li>
        <li>
          <a onClick={toggleMenu} href='#one'><i className="fa-solid fa-caret-right"></i><b>Public repos</b></a>
        </li>
        <li>
          <a onClick={toggleMenu} href='#two'><i className="fa-solid fa-caret-right"></i><b>Repo browser</b></a>
        </li>
        <li>
          <a onClick={toggleMenu} href='#three'><i className="fa-solid fa-caret-right"></i><b>Contact me</b></a>
        </li>
        <li>
          <div className='divider'></div>
          <a href='https://tropipaycom.notion.site/Tropipay-FrontEnd-Challenge-GitHub-repo-browser-8451cfe5d2a8406eba4c81646cd90b71' target="_blanck"><i className="fa-solid fa-bolt"></i><b>Tropypay Challeng</b></a>
        </li>
        <li>
          <a href='https://www.tropipay.com/' target="_blanck"><i className="fa-solid fa-link"></i><b>Tropypay web site</b></a>
        </li>
      </ul>
      
    </nav>
  );
}

export {Nav}

