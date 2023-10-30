import { AddShoppingCart, Delete, Pets } from '@mui/icons-material'
import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../Global/ContextP'
import { red } from '@mui/material/colors'




const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
})

const MyButtonA = styled(Button)({
    backgroundColor:"#E4E4E4",
    color:"#000000",
    margin: 2,
    "&:hover": {
        backgroundColor: "lightblue",
    }
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap:"5px"
})

const UserBox2 = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap:"5px",
    border: "10px",
})


const Navbar = () => {

    const context = useContext(ShoppingCartContext)

  return (
    <AppBar position="sticky" sx={{backgroundColor:"black"}}>

        <StyledToolbar>    
            <UserBox2>
                <NavLink to='/home'>
                    <MyButtonA variant='outlined'>Beast Store</MyButtonA>
                </NavLink>   
                <Pets />             
            </UserBox2>

            <UserBox>
                <NavLink to='/my-order'>
                    <MyButtonA variant='outlined' startIcon={<AddShoppingCart />}>My orders {context.counter} </MyButtonA>
                    
                </NavLink>
            </UserBox>



        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar