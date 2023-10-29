import { Box, Grid, Stack } from '@mui/material'
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import CardT from '../components/CardT'
import ProductDetail from '../components/ProductDetail'
import { ShoppingCartContext } from '../Global/ContextP'


const Home = () => {

  const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <ProductDetail />
      

      
      <Box marginTop={5} border={2} borderColor={"green"}   >
       <Grid container
          spacing={2} columns={{ xs: 4, sm: 8, md: 12, }}
          >
         
            
              {   
                context.products?.map( e =>(
                  <Grid item xs={12} sm={6} md={4} lg={8} border={4} borderColor="red" marginTop={0} key={e.id}>
                    <CardT  data={e} />
                  </Grid>
                  )
                )
              }
        
            
          
        </Grid>
      </Box>

      <Box border={5} sx={{width: "21000px"}}>
      
      </Box>

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