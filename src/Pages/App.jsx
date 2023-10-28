import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

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
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/the-orders', element: <TheOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> }
  ])
  return routes
}

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
