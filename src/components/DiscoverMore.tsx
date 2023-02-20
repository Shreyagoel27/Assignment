import React from 'react'
import Bedcard2 from './Bedcard2';
import Bedcard3 from './Bedcard1';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import {useMediaQuery,useTheme } from '@mui/material';
const DiscoverMore = () => {
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{padding:isMatch?"30px 27px 20px 27px":"80px 100px 20px 100px",backgroundColor:"#E1DDDD",height:isMatch?"1000px":"830px"}}>
    <Grid container columnSpacing={1} rowSpacing={6} sx={{height:"820px"}}>
      <Grid item xs={12} md={6} lg={6} style={isMatch?{ display: 'flex', justifyContent: 'center' }:{}}>
        <Bedcard3/>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
       
        <Box style={{ display:"flex",justifyContent:isMatch?"center":"flex-end"}}>
          <Bedcard2/>
        </Box>
       
        
      </Grid>
    </Grid>
    </Box>
   
  )
}

export default DiscoverMore
