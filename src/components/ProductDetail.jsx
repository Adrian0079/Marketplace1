import { Notes } from '@mui/icons-material'
import { Box, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import { ShoppingCartContext } from '../Global/ContextP'
import { useContext } from 'react'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    
    

    if (context.isDetail == true){
        console.log("Mostrando Producto: ", context.ShowProduct)
  return (
    <Box border={5} sx={{width: "21000px"}} >
        <Stack direction="column" spacing={2} justifyContent="center" border={1} alignContent="center" textAlign="center">
            <Typography variant='h5' fontWeight="bold">
                Detail
            </Typography>
            <Fab variant="circular" size="small" color="primary" sx={{marginLeft:"3"}}>
                <Notes />
            </Fab>
        </Stack>
        

    </Box>
  )
    }
    
}

export default ProductDetail