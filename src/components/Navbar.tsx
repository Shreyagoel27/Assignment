import React from 'react'
import { AppBar,Button,Tab,Tabs,Toolbar,
useMediaQuery,useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import logo from '../images/logo.svg';
import DrawerComp from './DrawerComp';
import { toolbarstyle } from './Style';
const Pages=["Home","About us","Services","Contact Us"]

const Navbar = () => {
    const btn={
        backgroundColor:'#72775B',
        color: '#FFFFFF',
        borderRadius: '0',
        fontFamily: 'Poppins',
        fontSize: '13px',
        width:'144px',
        height:'46px',
    
    }

    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <React.Fragment>
    <AppBar position='static' sx={{background:"#1B1B1B",height:'92px'}} >
       
           {
            isMatch?(
              <>
              <Toolbar style={{height:'46px',marginTop:'30px',marginLeft:'0px',marginRight:'0px'}}>
              <img src={logo}/>
               <DrawerComp items={Pages}/>
               </Toolbar>
              </>
            ):
            (
              <>
              <Toolbar style={toolbarstyle}>
              <img src={logo}/>
              <Tabs textColor='inherit' sx={{marginLeft:'auto'}}>
              {
                Pages.map((ele,id)=><Tab label={ele} key={id}/>)
              }
             
            </Tabs>
              <Button variant="contained" sx={{marginLeft:"auto", textTransform: 'none'}} style={btn} >Free quote</Button>
              </Toolbar>
              </>
            )
           }          
  
    </AppBar>
    </React.Fragment>
  )
}

export default Navbar
