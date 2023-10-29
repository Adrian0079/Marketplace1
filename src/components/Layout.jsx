import { Box, Stack } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    
    <Box>
        <Stack direction="row" spacing={2} justifyContent="center" border={5} alignContent="center">
            {children}
        </Stack>
    </Box>

  )
}

export default Layout