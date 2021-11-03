import React from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className={'main-header'}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default Header;
