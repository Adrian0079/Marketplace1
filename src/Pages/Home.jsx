import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import CardT from '../components/CardT'

const Home = () => {

  const [products, setProducts ] =useState(null);

  useEffect (()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <Layout>
      {
        products?.map(()=>(
          <CardT />
        )
           
        )
      }


    

        {/* -------------------------------------------------------------------------------------------------------------------- */}
      {/* <Box border={2}>

      </Box>

        <Grid container rowSpacing={0} xs={12} sm={6} md={4} lg={6}  borderColor="red" border={0}   justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/>  
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} border={2} marginTop={0}>
            <CardT/> 
          </Grid>
        </Grid> */}
      
      
    </Layout>
  )
}

export default Home