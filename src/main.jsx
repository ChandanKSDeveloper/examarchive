import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// web page
import About from './components/about.jsx'
import Pyq from './components/pyqSec.jsx'
import Home from './components/home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path='/'
        element={<App/>} >

        <Route
          path='home'
          element={<Home/> }
        />
        <Route
          path='about'
          element={<About/> }
        />
        <Route
          path='pyqSec'
          element={<Pyq/> }
        />

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
