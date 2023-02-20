import React from 'react'
import { Box } from '@mui/system';
import { Grid,Typography } from '@mui/material';
import { BuyBox6b, stylepara, BuyBox6a } from './Style';
import Bedcard3 from './Bedcard3';
import Checkbox from './Checkbox';
import Comment from './Comment';
import {useMediaQuery,useTheme } from '@mui/material';
import Dashboard7 from './Heading';
import { buypara } from './Style';

const WhyShouldBuy = () => {
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    
    <Box sx={isMatch?BuyBox6a:BuyBox6b}>
      <Grid container columnSpacing={{lg:13}} rowSpacing={4} sx={isMatch?{flexDirection:"column-reverse"}:{}}>
        <Grid item xs={12} md={12} lg={6} sx={{display:isMatch?"flex":"", justifyContent:isMatch?"center":""}}>  
        <Bedcard3/>
        </Grid>
        <Grid item xs={12} md={12} lg={6} sx={{height:"991px"}}>
          <Box>
            <Dashboard7/>
            <Box sx={stylepara}>
              <Typography sx={buypara}>In the summer of 2007 a man named Joe Safford decided he wanted to wear his new jeans national.</Typography>
            </Box>
            <Box sx={{width:"230px"}}>
              <Checkbox title="Our amazing benefit"/>
              <Checkbox title="One more amazing benefit"/>
              <Checkbox title="Your benefit here"/>
              <Checkbox title="Type more benefit"/>
            </Box>
          </Box>
        </Grid>
       </Grid>
  
     </Box>
  )
}

export default WhyShouldBuy;