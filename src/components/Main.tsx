import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useMediaQuery,useTheme } from '@mui/material';
const Main = () => {
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const [styletop, setstyletop] = useState("320px");
  const [styleright, setstyleright] = useState("250px")
  useEffect(() => {
    if(isMatch)
    {
      setstyletop("375px");
      setstyleright("50%");
    }
    else{
      setstyletop("320px");
      setstyleright("250px");
    }
    }
  , [isMatch])
  
  return (
    <Box sx={{height:"169px",width:isMatch?"290px":"340px",backgroundColor:"#E1DDDD",paddingLeft:"30px", paddingTop:"26px",position:"absolute",top:`${styletop}`,right:`${styleright}`,zIndex:"2",
    left:isMatch?"7px":""}}>
        <Typography sx={{fontSize:"14px",fontFamily:"Poppins", fontWeight:"400",heigh:"70px",width:"246px",color:"#000000CC"}}>
          "Definitely worth the investment. Really good. Keep up the excellent work. It's really wonderful."
          </Typography>
      <Box sx={{paddingTop:"30px"}}>
        <Typography sx={{fontSize:"14px",fontWeight:"bold",fontFamily:"Poppins",color:"#000000"}}>Jena Redmond</Typography>
        <Typography sx={{fontSize:"14px", color:"#00000066",marginTop:"9px"}}>Designer</Typography>
      </Box>
    </Box>
  )
}

export default Main
