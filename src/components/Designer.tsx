
import { Grid,Typography,Button } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import Bedcard4 from './Bedcard4';
import bluebed from '../images/blue_bed.avif'
import Main from './Main';
import {useMediaQuery,useTheme } from '@mui/material';
import Checkbox from './Checkbox';
import {btn} from './Style';
import { useState,useEffect } from 'react';
const Designer = () => {
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    const [wdth, setwdth] = useState("431px");
    useEffect(() => {
      if(isMatch)
      {
        setwdth("341px");
      }
      else{
        setwdth("433px")
      }
    }, [isMatch])
    
  return (
    <Box sx={isMatch?{padding:"20px 20px 10px 20px", backgroundColor:"#1B1B1B",height:"900px"}:{padding:"20px 100px 10px 100px", backgroundColor:"#1B1B1B",height:"550px",}}>
        <Grid container >
            <Grid item lg={6} xs={12}>
                <Box sx={{width:`${wdth}`,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Typography sx={{color:"#D9D4D4CC", fontSize:"15px", fontFamily:"Poppins",height:"75px"}}>That’s where we come in – the folks at Oliya, with our Kickstarter campaign goal of $1000 for a total books and one final book time</Typography>
                    <Grid container sx={{height:"126px", justifyContent:"center"}}>
                        <Grid item lg={4} xs={6} sx={{margin:"auto"}}><Checkbox title="Free Delivery"/></Grid>
                        <Grid item lg={4} xs={6} sx={{margin:"auto"}}><Checkbox title="24/7 Support"/></Grid>
                        <Grid item lg={4} xs={6} sx={{margin:"auto"}}><Checkbox title="Free Return"/></Grid>
                    </Grid>
                    <Button variant="contained" sx={{ textTransform: 'none',fontFamily:'Playfair Display',margin:"40px 0px"}} style={btn}>
                        <div>Get Started Now</div>
                        <span style={{marginLeft:'73px'}} >&#10230;</span>
                    </Button>
                </Box>
            </Grid>

            <Grid item lg={6} xs={12} sx={{ display:"flex",justifyContent:isMatch?"center":"flex-end",position:"relative"}}>
            <Box sx={{background:`transparent url(${bluebed}) 0% 0% no-repeat padding-box`,width:"417px",height:"515px", backgroundSize:"cover",zIndex:"1"}}/>
              <Main/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Designer;
