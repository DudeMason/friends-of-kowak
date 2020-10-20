import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => (

  <div>
    404 Error: Page not found!
    <Link to={'/'}>Home</Link>
  </div>

)

export default NoMatch;
