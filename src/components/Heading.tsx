import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Comment from './Comment'
import { BuyBox6a, styleCard2a,styleCard2b } from './Style';
import {useMediaQuery,useTheme } from '@mui/material';
const Heading = () => {
    const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={isMatch?BuyBox6a:{paddingTop:"70px"}} paddingTop="10px">
    <Comment title="Why Should Buy"/>
    <Typography sx={isMatch?styleCard2a:styleCard2b}>Pillows As Sure As The Sun Shines.</Typography>
    </Box>
  )
}

export default Heading