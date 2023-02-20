import { Box } from '@mui/material'
import React from 'react';
import { Grid } from '@mui/material';
import Cards from './Cards';
import {Button,useMediaQuery,useTheme } from '@mui/material';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';
import icon6 from '../images/icon6.svg';
const Cardsbox = () => {
  const arr=[
    {
      
      icon:`${icon1}`,
      title:'Soft Material',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
    {
      icon:`${icon2}`,
      title:'Safe For Animal',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
    {
      icon:`${icon3}`,
      title:'Comfortable texture',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
    {
      icon:`${icon4}`,
      title:'Happy Power',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
    {
      icon:`${icon5}`,
      title:'Good Quality',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
    {
      icon:`${icon6}`,
      title:'Not Dusty',
      des:'The versatile space makes it easy to keep a fresh supply of ingredients'
    },
  ]
  const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const styleg={
    paddingLeft:isMatch?'14px':'120px',
    paddingRight:isMatch?'14px':'120px',
    pt:'50px',
    pb:'30px',
    background:'#E1DDDD',
    bottom:'0px'
}
  return (
    <Box sx={styleg} >
      <Grid container  columnSpacing={1} rowSpacing={2} >
        {
          arr.map((items,id)=><Grid item xs={12} sm={6} md={4}><Cards title={items.title} des={items.des} icon={items.icon} key={id}/></Grid>
          )
        }
        
      </Grid>
    </Box>
  )
}

export default Cardsbox
