import React from 'react';

import { Nav } from './Nav';
import { Parallax } from './Parallax';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const Header = () => {
  return (
    <>
        <Nav/>
        <Parallax/>
    </>
  );
}

export {Header}
