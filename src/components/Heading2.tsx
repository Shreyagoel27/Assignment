import React, {useState, useEffect} from 'react'
import { Box } from '@mui/system';
import { Typography ,Grid} from '@mui/material';
import play from '../images/play-button.svg';
import {useMediaQuery,useTheme } from '@mui/material';
const Heading2 = () => {
    const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const [stylefont, setstylefont] = useState("80px");
  const [stylewdth, setstylewdth] = useState("562px");
  
  useEffect(() => {
    if(isMatch)
    {
        setstylefont("37px");
        setstylewdth("347px");
      
    }
    else{
        setstylefont("80px")
    }
  }, [isMatch])
  
  return (
    <Grid container sx={isMatch?{padding:"0 20px", flexDirection:"column-reverse"}:{ position:"relative",padding:"0px 160px"}}>
        <Grid item lg={6} sx={isMatch?{display:"flex",justifyContent:"center",alignContent:"center"}:{zIndex:"1"}}>
            <Box sx={isMatch?{height:"98px",pt:"35px"}:{height:"213px",width:"762px"}}>
                <Typography sx={{color:"#D9D4D4",fontSize:`${stylefont}`,fontFamily:"Playfair Display",fontWeight:"bold",textAlign:isMatch?"center":""}}>We Bring The Good Pillows To Life.</Typography>
            </Box>
        </Grid>
        <Grid item lg={6} sx={isMatch?{}:{position: "absolute",right: "414px",top: "20px"}}>
            <Box sx={{width:`${stylewdth}`,height:"88px",background: "#72775B 0% 0% no-repeat padding-box",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <Grid container sx={{width: "164px",height:"64px",position:"absolute",right:isMatch?"":"-22px"}}>
                    <Grid item lg={7}xs={6} sx={{display:"flex", alignItems:"center",justifyContent:"center"}}><Typography sx={{fontSize:"12px", color:"#D9D4D4"}}>30S VIDEO</Typography></Grid>
                    <Grid item lg={5} xs={6} sx={{background:`transparent url(${play}) 0% 0% no-repeat padding-box`}}/>
                </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Heading2
