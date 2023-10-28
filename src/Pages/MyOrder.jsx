import { Box, Button, styled } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

const RedButton = styled(Button)({
  backgroundColor:"red",
  color:"#fff",
  margin: 2,
  "&:hover": {
      backgroundColor: "lightblue",
  }
})

const MyOrder = () => {
  return (
    <Layout>
      MyOrder
    </Layout>
  )
}

export default MyOrder