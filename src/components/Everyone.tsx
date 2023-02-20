import { Box, Typography } from '@mui/material'
import React from 'react'
import { everyonebox } from './Style';
const Everyone = () => {
  return (
    <Box sx={everyonebox }>
        <Box sx={{width:"630px",height:"178px",textAlign:"center"}}>
          <Typography  sx={{fontSize:"70px",fontFamily:"Playfair",fontWeight:"bold"}}> Everyone Needs One Until They Do.</Typography> 
           </Box>
    </Box>
  )
}

export default Everyone
