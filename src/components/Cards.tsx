import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { cardtitle, cardbox ,carddes} from './Style';
interface props{
  icon:string,
  title:string,
  des:string,
  key:Number
}

const Cards = (p:props) => {
  return (
   
    <Paper variant="outlined" square >
        <Box sx={cardbox} >
            <Box sx={{padding:'39px 47px', textAlign:'center'}}>
                <Box sx={{marginBottom:'20px'}}><img src={p.icon}/></Box>
                <Box sx={cardtitle}>{p.title}</Box>
                <Box sx={carddes}>{p.des}</Box>
            </Box>
        </Box>
        </Paper>
  )  
   
}

export default Cards
