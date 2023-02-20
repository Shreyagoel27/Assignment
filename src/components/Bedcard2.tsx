import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import greybed from '../images/Grey_bed.jpg';
import './Dashboard.css';
import { textStyle2} from "./Style";
import {useMediaQuery,useTheme } from '@mui/material';
const  Bedcard2= () => {
   const theme=useTheme();
   const isMatch=useMediaQuery(theme.breakpoints.down('md'));
   return(
      <div>
    <div className='container-2'>
   <div style={{  
    background: `transparent url(${greybed}) 0% 0% no-repeat padding-box`,
    borderRadius: "300px 300px 0px 0px",
    backgroundSize:"cover",
     }} className="top-div-2"></div> 
     
     <div className="bottom-div-2"></div>
     </div>
     <Box sx={isMatch?{marginTop:"35px"}:textStyle2}>
      <Typography sx={{fontWeight:"bold", color:"#393842",textAlign:isMatch?"center":""}}>Maternity Foam Pillow</Typography>
      <Typography sx={{marginTop:"10px",textAlign:isMatch?"center":""}}>Discover more <i className='fas fa-long-arrow-alt-right' style={{color:"#76747A"}}></i></Typography>
      </Box>
     </div>
);
}

export default Bedcard2;
