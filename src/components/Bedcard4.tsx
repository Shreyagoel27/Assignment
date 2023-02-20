import React from 'react';
import { Box } from '@mui/system';
import bluebed from '../images/blue_bed.avif'
import Main from './Main';
const Bedcard4 = () => {
  return (
    <Box sx={{position:"relative"}}>
    <Box sx={{background:`transparent url(${bluebed}) 0% 0% no-repeat padding-box`,width:"417px",height:"515px",  backgroundSize:"cover",position:"absolute"}}/>
    <Main />
    </Box>
  )
}

export default Bedcard4;
