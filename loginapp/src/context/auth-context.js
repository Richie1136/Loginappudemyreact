import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    const storedinfo = localStorage.getItem("isLoggedIn")
    if (storedinfo === 'Logged In') {
      setIsLoggedin(true)
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedin(false)
  }

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 'Logged In')
    setIsLoggedin(true)
  }
  return <AuthContext.Provider value={{ isLoggedIn: isLoggedin, onLogout: logoutHandler, onLogin: loginHandler }}>
    {children}
  </AuthContext.Provider >
}

export default AuthContext
