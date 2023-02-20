import React, { useState,useEffect} from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import {useMediaQuery,useTheme } from '@mui/material';
import room1 from '../images/room1.webp';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.webp';
import room4 from '../images/room4.jpg';
import Heading2 from './Heading2';

const Dashboard7 = () => {
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    const [wdth, setwdth] = useState('100%');
    const [hght, sethght] = useState('400');
    const [stylepadding, setstylepadding] = useState("20px 100px 10px 100px");

    const [styletop, setstyletop] = useState("430px")
    useEffect(() => {
        if(isMatch)
        {
            setwdth('169px');
            sethght('237px');
            setstylepadding("20px 20px 0px 20px");
            setstyletop('579px')
        }

        else {
            setwdth('100%');
            sethght('400px');
            setstylepadding("20px 100px 10px 100px");
            setstyletop('430px')
        }
    }, [isMatch])
    
  return (
    <Box sx={{backgroundColor:"#1B1B1B"}}>
        <Box sx={{padding:`${stylepadding}`,position:"relative",height:isMatch?"720px":"600px",zIndex:isMatch?"2":"0"}}>
    <Grid container columnSpacing={2} >
        <Grid item lg={3} xs={6}>
            <Box sx={{background:`transparent url(${room1}) 0% 0% no-repeat padding-box`,width:`${wdth}`,height:`${hght}`, backgroundSize: "cover",}}/>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box sx={{background:`transparent url(${room2}) center center no-repeat padding-box`,width:`${wdth}`,height:`${hght}`, backgroundSize: "cover",}}/>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box sx={{background:`transparent url(${room3}) 0% 0% no-repeat padding-box`,width:`${wdth}`,height:`${hght}`, backgroundSize: "cover",}}/>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box sx={{background:`transparent url(${room4}) 0% 0% no-repeat padding-box`,width:`${wdth}`,height:`${hght}`, backgroundSize: "cover",}}/>
        </Grid>
    </Grid>
        </Box>
        <Box sx={{position:"absolute",bottom:"10px",width:"100%",top:`${styletop}`,zIndex:"1"}}>
        <Heading2/>
        </Box>
    </Box>
  )
}

export default Dashboard7
