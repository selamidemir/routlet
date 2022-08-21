import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <span className='app-name'>Reoutlet</span>
        <span className='nav-links'>[<Link to="/">Home</Link>] - 
        [<Link to="users">Users</Link>]</span>
    </div>
  );
}

export default Navbar;