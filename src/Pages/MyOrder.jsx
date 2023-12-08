import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { ShoppingCartContext } from '../Global/ContextP'



const RedButton = styled(Button)({
  backgroundColor:"red",
  color:"#fff",
  margin: 2,
  "&:hover": {
      backgroundColor: "lightblue",
  }
})

const MyOrder = () => {
  
  const context = useContext(ShoppingCartContext)
  

  return (
    <Layout>
      <Grid container spacing={2}>
      {context.cartP.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={2} xl={1} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.images[0]}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" 
                      border={2} textAlign="center" 
                      borderColor={"black"} bgcolor={"orange"} fontWeight="bold" fontSize={17}>
                $ {product.price}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box border={1} xs={12} sm={6} md={4} lg={2} xl={1}
    sx={{
      width:"20vw",
      height:{xs:"9vh", sm:"11vh", md:"9vh", lg:"9vh", xl:"9vh",},
      boxShadow:4,
      borderRadius:2
    }}
    >
    <Typography variant="body1" component="div" 
    fontWeight="bold" 
    p={0.2} width="100%" 
    height="100px" border={0}
    sx={{
      fontSize:{xs:18, sm:22, md:28, lg:32, xl:32,}
    }}
    >
      Total Price: ${context.addPrice} 
    </Typography>
    </Box>
    
    </Layout>
  )
}

export default MyOrder