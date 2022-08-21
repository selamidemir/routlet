import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { users } from '../assets/data';
import Navbar from '../components/Navbar';

function Users() {
  return (
    <div>
        <Navbar />
        <h1>Users</h1>
        <hr />
            <Outlet />
        {
            users.map(user => <div key={user.id}><Link to={`${user.id}`} className='user-link'>{user.name}</Link></div>)
        }
    </div>
  );
}

export default Users;