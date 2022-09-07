import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export const NavbarBasic = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{gap:"20px"}}>
          <Link to="/" style={{color:"white" , textDecoration:"none"}}><Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
           UserDetails
          </Typography></Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
         <Link to="/adduser" style={{color:"white" , textDecoration:"none"}}><Typography variant="h6" component="div"  sx={{ flexGrow: 0 }}>
          Add User
          </Typography></Link> 
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
