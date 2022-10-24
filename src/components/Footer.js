import React from 'react';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Footer = () => {
  return (
    <footer class="page-footer indigo darken-1">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Develop by:</h5>
            <p class="grey-text text-lighten-4">Christian Ledesma</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/cledesma92/" target="_blanck"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a class="grey-text text-lighten-3" href="https://github.com/cledesma92" target="_blanck"><i class="fa-brands fa-github"></i> GitHub - cledesma92</a></li>
              <li><a class="grey-text text-lighten-3" href="https://github.com/scodify" target="_blanck"><i class="fa-brands fa-github"></i> GitHub - SCodify</a></li>
              <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCbjbFLkPKFuynUPG1bmq3hg" target="_blanck"><i class="fa-brands fa-youtube"></i> YouTube - SoftCodify</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        <small>© Todos los derechos reservados</small>
        <a class="grey-text text-lighten-4 right" href="#!"><small>SoftCodify | 2022</small></a>
        </div>
      </div>
    </footer>
  );
}

export {Footer}
