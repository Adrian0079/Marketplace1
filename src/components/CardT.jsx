import { Add, Class, Delete, LinkedIn, Navigation } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Fade, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Global/ContextP'


const CardT = (data) => {

    const context = useContext(ShoppingCartContext)
    // ()=> context.setCounter(context.count + 1)
  return (
    
        <Card sx={{ maxWidth: 400, cursor:"pointer" }} border={0}>
            <CardMedia
                border={0}
                sx={{ height: 270 }}
                image={data.data.images[0]}
                title="green iguana"
            />
            <Stack direction="row" spacing={2} justifyContent="space-evenly" alignItems="center">
            <Fab size="small" color="secondary" aria-label="add" onClick={()=> context.setCounter(context.counter + 1)}>
            
                <Delete />
            
                {/* <Add onClick={()=>{console.log("Hola")}}/> */}
            </Fab>

            <Fab variant="extended" size="small" color="primary">
                <Class sx={{ mr: 1 }} />
                    {data.data.category.name}
            </Fab>
            </Stack>

                <CardContent >
                <Stack direction="row" spacing={0} justifyContent="center" alignContent="center">
                    
                        <Typography gutterBottom variant="h5" component="div">
                        {data.data.title}
                        </Typography>

                        <Box boxShadow={4} ml={2} border={0} height={35} borderRadius={0} bgcolor="#E5FD4D"
                        >
                            <Typography gutterBottom variant="h5" component="div" p={0.1}>
                            ${data.data.price}
                            </Typography>
                        </Box>
                </Stack>
                    </CardContent>
                    

            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    
  )
}

export default CardT