import React, { useState, useEffect } from 'react';
import '../styles/AppRouters.css';
// React Router DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRouters } from './PublicRouters';
import { PrivateRouters } from './PrivateRouters';
import Login from '../components/Login';
import Register from '../components/Register';
import DashboardRouters from './DashboardRouters';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AppRouters = () => {
  const [checking, setChecking] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsAuth(true)
      }
      else {
        setIsAuth(false)
      }
      setChecking(false)
    })
  }, [setIsAuth, setChecking])

  if (checking) {
    return (
      <h1>Espere....</h1>
    )
  }

  return (
    <div className="AppRouters">
      <Router>
        <Routes>
          <Route path='/login' element={
            <PublicRouters isAuth={isAuth} >
              <Login />
            </PublicRouters>} />
          <Route path='/register' element={
            <PublicRouters isAuth={isAuth} >
              <Register />
            </PublicRouters>} />
          <Route path='/*' element={
            <PrivateRouters isAuth={isAuth}>
              <DashboardRouters />
            </PrivateRouters>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouters;
