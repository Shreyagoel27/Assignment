import React from 'react'
import { Box } from '@mui/system';
import { Grid,Typography } from '@mui/material';
import {logos} from './Style.jsx';
import {useMediaQuery,useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
export const Logo=()=>{
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const [boxpadding, setboxpadding] = useState("0px 134px 10px 134px");
  useEffect(() => {
    if(isMatch)
    {
        setboxpadding('0px 34px 10px 34px');
        
    }
    else {
        setboxpadding("0px 134px 10px 134px");
        
    }
}, [isMatch])

    return (
        <Box sx={{padding:`${boxpadding}` ,backgroundColor:"#E1DDDD"}}>
            <Grid container sx={{display:"flex", justifyContent:"center",backgroundColor:"#1B1B1B",height:"130px"}}>
                {
                    logos.map((item)=><Grid item lg={2} xs={6} sx={{padding:"2px",display:"flex",justifyContent:"center",alignItems:"center"}}> <img src={item.src}/></Grid>)
                }
                
            </Grid>
        </Box>
    )
}