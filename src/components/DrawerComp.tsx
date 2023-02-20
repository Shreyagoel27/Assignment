import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  IconButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  items: Array<string | number>;
}
const DrawerComp = (props: Props) => {
  const [opendrawer, setopendrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={opendrawer} onClose={() => setopendrawer(false)}>
        <List>
          {props.items.map((ele, id) => {
            return (
              <ListItemButton onClick={()=>setopendrawer(!opendrawer)}>
                <ListItemIcon>
                  <ListItemText key={id}>{ele}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
          <ListItemButton>
                <ListItemIcon>
                  <ListItemText >Free quote</ListItemText>
                </ListItemIcon>
              </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopendrawer(!opendrawer)}
        style={{backgroundColor:'#72775B',borderRadius:'0px'}}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
