import React from 'react'
import { Box } from '@mui/system';
import {Typography ,Grid} from '@mui/material';
import checkbox from '../images/checkbox.svg'
import { checkboxlabel } from './Style';
interface props{
  title:string
}
const Checkbox = (p:props) => {
  return (
    <Grid container sx={{marginTop:"13px"}}>
      <Grid item lg={2}><img src={checkbox}/> </Grid>
      <Grid item lg={10}><Typography sx={checkboxlabel}>{p.title}</Typography> </Grid>
             
    </Grid>
  )
}

export default Checkbox