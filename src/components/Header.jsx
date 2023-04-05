import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Typography from "@material-ui/core/Typography";
import Dropdown from 'react-bootstrap/Dropdown'


function Header(){

return(
    <div>
    <AppBar position="sticky" style={{backgroundColor:'#eab904'}}>
    <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
    <Box>
    <Typography variant="h3"> COFFEE DAY!🧡</Typography>
    </Box>
    <Box>
    <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
        <IconButton style={{color:'color'}}>
        <MenuIcon />
        </IconButton>
        </Dropdown.Toggle>
        <Dropdown.Menu>
             <Dropdown.Item href="/about">About</Dropdown.Item>
             <Dropdown.Item href="/premium">Premium</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
             <Dropdown.Item href="#/action-4">Customer Servive</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </Box>
    </Toolbar>
    </AppBar>
    </div>
)
}


export default Header;