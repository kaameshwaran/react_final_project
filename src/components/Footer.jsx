import React from "react";
import { Box } from "@mui/material";
import { BottomNavigation,BottomNavigationAction } from "@material-ui/core";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";


function Footer() {

    return (
    <Container maxWidth='xl'  style={{backgroundColor:"#D3D3D3"}}>
    <BottomNavigation style={{backgroundColor:"#D3D3D3"}} >
    <a style={{paddingRight:'15px'}} href={"https://facebook.com"}target="_blank" rel="noreferrer"> <BottomNavigationAction icon={<FacebookRoundedIcon />} /></a> 
    <a href={"https://github.com/kaameshwaran?tab=repositories"}target="_blank" rel="noreferrer"> <BottomNavigationAction icon={<GitHubIcon />} /></a> 
    <a style={{paddingLeft:'13px'}} href={"https://twitter.com"}target="_blank" rel="noreferrer"> <BottomNavigationAction icon={<TwitterIcon />} /></a> 
    <a style={{paddingLeft:'15px'}} href={"https://instagram.com"}target="_blank" rel="noreferrer"> <BottomNavigationAction icon={<InstagramIcon />} /></a> 
    </BottomNavigation>
    <Box paddingTop={"10px"} textAlign={"center"}>
    <Typography variant="subtitle1">It starts with you!😊</Typography>
    </Box>
    <br />
    <Box textAlign={"center"}>
      <Typography variant="caption">❤️Kaameshwaran. © 2023</Typography>
    </Box>
  </Container>
);
}




export default Footer;