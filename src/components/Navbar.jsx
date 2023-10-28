import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
})

const MyButtonA = styled(Button)({
    backgroundColor:"#838896",
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
  return (
    <AppBar position="sticky">

        <StyledToolbar>    
            <UserBox2>
                <NavLink to='/shopi'>
                    <MyButtonA variant='outlined'>Shopi</MyButtonA>
                </NavLink>
                <NavLink to='/all'>
                    <MyButtonA variant='outlined'>All</MyButtonA>
                </NavLink>
                <NavLink to='/clothes'>
                    <MyButtonA variant='outlined'>Clothes</MyButtonA>
                </NavLink>
            </UserBox2>

            <UserBox>
                <NavLink to='/my-order'>
                    <MyButtonA variant='outlined'>My orders</MyButtonA>
                </NavLink>
                <NavLink to='/my-account'>
                    <MyButtonA variant='outlined'>My Account</MyButtonA>
                </NavLink>
                <NavLink to='/sign-in'>
                    <MyButtonA variant='outlined'>Sign In</MyButtonA>
                </NavLink>
            </UserBox>



        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar