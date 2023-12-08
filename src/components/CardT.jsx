import { Add, Class, Delete, LinkedIn, Navigation, Notes } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Fade, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Global/ContextP'


const CardT = () => {

    const context = useContext(ShoppingCartContext)

    

    //Funcion para añadir al carrito de compras.
    const addProducts =(product)=>{
        
        context.setCounter(context.counter + 1)
        context.setCartP([...context.cartP, product])
        console.log("carrito", context.cartP)
        context.setAddPrice(context.addPrice + product.price)
        console.log("precio añadido:", context.addPrice)
    }


    return (
      
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center" borderRadius={0.1} border={0} borderColor="red">
            <TextField
            type="text"
            placeholder="Search products"
            value={context.searchTerm}
            onChange={(e) => context.setSearchTerm(e.target.value)}
            sx={{
              marginBottom: "50px", 
              marginTop: "50px", 
              width:{xs:270, sm:400, md:400, lg:400, xl:400}, 
              border:'2px solid #ccc', 
              borderRadius:"5px"}}
          />
          </Box>
        
        <Grid container spacing={0} width="65vw" border={0}
        sx={{
          marginLeft:{xs:"32px", sm:"0px"}
        }}
        >
          {context.products &&
            context.products
              .filter((product) =>
                product.title.toLowerCase().includes(context.searchTerm.toLowerCase())
              )
              .map((product) => (
                <Grid boxShadow={5} border={0}
                 item xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}  >
                  <Card sx={{width: '100%', height: '100%'}}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={product.images[0]}
                    
                    />
                    <Fab size="small" color="default" aria-label="add" onClick={() => addProducts(product)}>
                        <Add />
                    </Fab>
                    <CardContent>
                      <Typography variant="h6" component="div" fontSize={15}>
                        {product.title}
                      </Typography>
                      <Typography 
                      variant="body2" color="text.secondary" 
                      border={2} textAlign="center" 
                      borderColor={"black"} bgcolor={"orange"} fontWeight="bold" fontSize={17}>
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