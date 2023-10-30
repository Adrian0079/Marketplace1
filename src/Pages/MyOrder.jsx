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
        <Grid item xs={12} sm={6} md={4} key={product.id}>
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
              <Typography variant="body2" color="text.secondary">
                $ {product.price}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Typography variant="h6" component="div">
                Total Price: ${context.addPrice} 
              </Typography>
    </Layout>
  )
}

export default MyOrder