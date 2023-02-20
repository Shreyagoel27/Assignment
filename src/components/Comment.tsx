import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { commentTitle } from './Style';
interface props{
    title:string,
  }
  
const Comment = (p:props) => {
  return (
    <Box sx={{display:"flex"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Box style={{width:"38px",height: "0px",border: "2px solid #72775B"}}/>
        </Box>
        <Typography sx={commentTitle}>{p.title}</Typography>
    </Box>
  )
}

export default Comment