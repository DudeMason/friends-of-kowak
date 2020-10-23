import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => (

  <div align='center'>
    <br/>
    404 Error: Page not found!
    <br/>
    <Link to={'/'}>Home</Link>
  </div>

);

export default NoMatch;
