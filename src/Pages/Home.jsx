import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'

import Layout from '../components/Layout'
import CardT from '../components/CardT'

import { ShoppingCartContext } from '../Global/ContextP'


const Home = () => {

  const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      
      <Box width={9000} border={0}>

      </Box>

      <Box border={0} borderColor={"green"}   >

        <Typography variant='h3' textAlign="center" fontWeight="bold" mt={2}>
          Beast Store
        </Typography>

        <CardT />  

      </Box>

      <Box width={9000} border={0}>

      </Box>

    </Layout>
  )
}

export default Home