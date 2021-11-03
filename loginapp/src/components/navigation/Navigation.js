import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import './Navigation.css';

const Navigation = ({ isLoggedIn, onLogout }) => {
  const ctx = useContext(AuthContext)
  return (
    <nav className='nav'>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};

export default Navigation;
