import React from 'react';
import './Dashboard.css';
import  Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import {useMediaQuery,useTheme } from '@mui/material'
import {btn,youderserve1,youderserve2} from './Style';

const YouDeserve = () => {
  const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    
  return (
    <Box sx={isMatch?youderserve1:youderserve2} >
      <div className={isMatch===false?'cl2':'cl6'}>
        <div>
          <span className={isMatch===false?'cl4':'cl7'}>You Deserve A Pillows Today.</span>
        </div>
        <div className='cl5'>
        <Button variant="contained" sx={{ textTransform: 'none',fontFamily:'Playfair Display'}} style={btn} >
        <div>Get Started Now</div>
        <span style={{marginLeft:'73px'}} >&#10230;</span>
        </Button>
        </div>
      </div>
    </Box>
    
  )
}

export default YouDeserve;
