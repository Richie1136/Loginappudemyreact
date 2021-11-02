import React from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={'main-header'}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default Header;
