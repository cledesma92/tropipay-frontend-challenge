import React from 'react';

import { Nav } from './Nav';
import { Parallax1 } from './Parallax1';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Header = () => {
  return (
    <>
        <Nav/>
        <Parallax1/>
    </>
  );
}

export {Header}
