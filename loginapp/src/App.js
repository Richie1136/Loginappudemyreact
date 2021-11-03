import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/header/Header'
import AuthContext from './context/auth-context';

function App() {
  const context = useContext(AuthContext)
  return (
    <>
      <Header />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
