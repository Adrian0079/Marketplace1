import { Add, Class, Delete, LinkedIn, Navigation, Notes } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Fade, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Global/ContextP'


const CardT = (data) => {

    const context = useContext(ShoppingCartContext)

    //Funcion para los detalles del producto.
    const shProduct =(productDetails)=>{
        context.openProductDetail()
        context.setShowProduct(productDetails)
    }

    //Funcion para añadir al carrito de compras.
    const addProducts =(data)=>{
        context.openProductDetail()
        context.setCounter(context.counter + 1)
        context.setCartP([...context.cartP, data])
        console.log("carrito", context.cartP )
    }


    return (
        <Box>
        <TextField
          type="text"
          placeholder="Buscar productos"
          value={context.searchTerm}
          onChange={(e) => context.setSearchTerm(e.target.value)}
        />
        <Grid container spacing={1}>
          {context.products &&
            context.products
              .filter((product) =>
                product.title.toLowerCase().includes(context.searchTerm.toLowerCase())
              )
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={product.images}
                    title="green iguana"
                    />
                    <Fab color="primary" aria-label="add" onClick={() => context.setCounter(context.counter + 1)}>
                        <Add />
                    </Fab>
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
      </Box>


        
        
        )
    
  
}


export default CardT