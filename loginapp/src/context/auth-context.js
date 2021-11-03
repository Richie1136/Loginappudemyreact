import React, { useState } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const logoutHandler = () => {
    setIsLoggedin(false)
  }

  const loginHandler = () => {
    setIsLoggedin(true)
  }
  return <AuthContext.Provider value={{ isLoggedin: isLoggedin, onLogout: logoutHandler, onLogin: loginHandler }}>
    {children}
  </AuthContext.Provider >
}

export default AuthContext
