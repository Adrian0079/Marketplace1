import { Add, Class, LinkedIn, Navigation } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Fade, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const CardT = (data) => {
  return (
    
        <Card sx={{ maxWidth: 400, cursor:"pointer" }} border={7}>
            <CardMedia
                border={7}
                sx={{ height: 140 }}
                image="https://i.auto-bild.de/ir_img/2/3/9/6/9/9/3/5a6db58e2305352c.jpg"
                title="green iguana"
            />
            <Stack direction="row" spacing={2} justifyContent="center" border={5} alignItems="center">
            <Fab size="small" color="secondary" aria-label="add">
                <Add />
            </Fab>

            <Fab variant="extended" size="small" color="primary">
                <Class sx={{ mr: 1 }} />
                    Category
            </Fab>
            </Stack>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mustang cobra $500k
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    
  )
}

export default CardT