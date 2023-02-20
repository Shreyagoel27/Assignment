import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { FooterTitle } from './FooterTitle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Facebook from '../images/Facebook.svg';
import Instagram from '../images/Instagram.svg';
import LinkedIn from '../images/linkedIn.svg';
import Twitter from '../images/Twitter.svg';
import TextField from '@mui/material/TextField';
import {Button,useMediaQuery,useTheme } from '@mui/material'
import { footerbox1,footerbox2 ,btn,footerheading1,footerheading2,footerheading3,email} from './Style';

export default function Footer() {
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    <Box sx={isMatch?footerbox1:footerbox2} >
        <Grid container spacing={3}>
            <Grid item xs={12} lg={3} >
                <FooterTitle variant='body1' sx={footerheading1}>Pilled.</FooterTitle>
                <Typography sx={{fontSize:'15px',color:'#72775B',fontFamily:'Poppins',width:isMatch?"316px":"216px"}}>
                    In the summer of 2007 a man named Joe Safford decided he wanted to wear his new jeans national.
                </Typography>
                <Typography sx={{fontSize:'14px',color:'#000000',fontFamily:'Poppins',paddingTop:"50px"}}>
                    Copyright © 2021 pilled.
                </Typography>
                
            </Grid>

            <Grid item xs={12}  lg={3} >
                <FooterTitle variant='body1' sx={footerheading2}>Get In Touch</FooterTitle>
                <Box >
                    <Grid container sx={{width:"250px"}} rowSpacing={3}>
                        <Grid item lg={2} xs={2} sx={{margin:"auto",color:"#72775B"}}><LocationOnIcon/></Grid>
                        <Grid item lg={10} xs={10} >
                            <Typography sx={{fontSize:"15px",fontFamily:"Poppins",color:"#72775B"}}>8819 Ohio St. South Gate, Ca 90280</Typography>
                        </Grid>
                        
                        <Grid item lg={2} xs={2} sx={{margin:"auto",color:"#72775B"}}><EmailIcon/></Grid>
                        <Grid item lg={10} xs={10} >
                            <Typography sx={{fontSize:"15px",fontFamily:"Poppins",color:"#72775B"}}>email@lavino.com</Typography>
                        </Grid>

                        <Grid item lg={2} xs={2} sx={{margin:"auto",color:"#72775B"}}><PhoneEnabledIcon/></Grid>
                        <Grid item lg={10} xs={10} >
                            <Typography sx={{fontSize:"15px",fontFamily:"Poppins",color:"#72775B"}}>(205) 555-0100</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} lg={3} sx={{padding:"0px 30px"}}>
                <FooterTitle>
            <Grid container columnSpacing={2}>
            <Grid item lg={3} xs={3}><img src={Facebook}/></Grid>
            <Grid item lg={3} xs={3}><img src={Instagram}/></Grid>
            <Grid item lg={3} xs={3}><img src={Twitter}/></Grid>
            <Grid item lg={3} xs={3}><img src={LinkedIn}/></Grid>
            </Grid>
            </FooterTitle>
            <Typography variant='caption' sx={{fontSize:'15px',color:'#72775B',fontFamily:'Poppins'}}>
            Lorem ipsum dolor sit amet, consec 
            tetur adipiscing elit, sed do eiusmod.
            </Typography>
            </Grid>

            <Grid item xs={12} lg={3} >
            <FooterTitle variant='body1' sx={footerheading3}>Subscribe Newsletter</FooterTitle>
            <Typography  sx={email}>Your email</Typography>
            <TextField
                placeholder="Enter Your Email . . ."
                type="email"
                variant="outlined"
                style={{justifyContent:'center',marginBottom:'20px'}}
                fullWidth
                
             />
             <Button variant="contained" sx={{marginLeft:"auto", textTransform: 'none',fontFamily:'Playfair Display'}} style={btn} >Subscribe</Button>
            </Grid>

        </Grid>

    </Box>
</>
  );
}