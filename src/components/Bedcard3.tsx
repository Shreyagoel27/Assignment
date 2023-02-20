import { Box, Typography } from "@mui/material";
import React from "react";
import greenbed from "../images/Green_bed.jpg";
import Comment from "./Comment";
import "./Dashboard.css";
import { textStyle3 } from "./Style";
import {useMediaQuery,useTheme } from '@mui/material';
const Bedcard3 = () => {
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    return (
        
        <div>
          <div className="container-3">
            <div
              style={{
                background: `transparent url(${greenbed}) 0% 0% no-repeat padding-box`,
                borderRadius: "300px 300px 0px 0px",
                backgroundSize: "cover",
              }}
              className="top-div-3"
            ></div>
            <div className="bottom-div-3"></div>
          </div>
          <Box sx={textStyle3}>
            
           { !isMatch && <Comment title="Our Collection"/>}
          </Box>
        </div>
      );
}

export default Bedcard3;