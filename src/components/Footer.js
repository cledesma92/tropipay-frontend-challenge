import React from 'react';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Footer = () => {
  return (
    <footer className="page-footer indigo darken-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Develop by:</h5>
            <p className="grey-text text-lighten-4">Christian Ledesma</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/cledesma92/" target="_blanck"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/cledesma92" target="_blanck"><i className="fa-brands fa-github"></i> GitHub - cledesma92</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/scodify" target="_blanck"><i className="fa-brands fa-github"></i> GitHub - SCodify</a></li>
              <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCbjbFLkPKFuynUPG1bmq3hg" target="_blanck"><i className="fa-brands fa-youtube"></i> YouTube - SoftCodify</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        <small>© Todos los derechos reservados</small>
        <a className="grey-text text-lighten-4 right" href="#!"><small>SoftCodify | 2022</small></a>
        </div>
      </div>
    </footer>
  );
}

export {Footer}
