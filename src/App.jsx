import { useState } from 'react'
import Header from './components/header'
// import Logo from './components/logo';
import { Outlet, useLocation,Navigate } from "react-router-dom";
import Footer from './components/footer';
import Home from './components/home.jsx'

function App() {
 
  const location = useLocation();

  return (
    <>
      <Header/>
      {location.pathname ==='/' ? <Home/> : <Outlet />}
      <Footer />

    </>
  )
}

export default App
