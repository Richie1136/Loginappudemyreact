import React, { useContext } from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';
import AuthContext from '../../context/auth-context';

const Header = () => {
  const context = useContext(AuthContext)
  return (
    <header className={'main-header'}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={AuthContext.onLogout} />
    </header>
  );
};

export default Header;
