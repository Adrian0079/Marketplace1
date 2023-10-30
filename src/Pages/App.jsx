import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import ShoppingCartProvider from '../Global/ContextP'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import TheOrders from './TheOrders'
import NotFound from './NotFound'
import SignIn from './SignIn'
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
