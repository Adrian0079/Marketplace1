
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import ShoppingCartProvider from '../Global/ContextP'
import Home from './Home'

import MyOrder from './MyOrder'

import NotFound from './NotFound'

import Navbar from '../components/Navbar'

const AppRoutes =()=>{
  let routes = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },

  ])
  return routes
}

function App() {
 

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
