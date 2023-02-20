import { Box, Typography } from '@mui/material'
import React from 'react'
import { everyoneneeds } from './Style';

const EveryoneNeeds = () => {
  return (
    
    <Box sx={{padding: "10px 0px 10px 129px",backgroundColor:"#E1DDDD"}}>
        <Typography sx={everyoneneeds}>Everyone Needs One Until They Do.</Typography>
    </Box>
  )
}

export default EveryoneNeeds;