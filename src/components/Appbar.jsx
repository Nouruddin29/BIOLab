import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <div className='formpage' >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BIO CODE Lab
          </Typography>
          <Button color="inherit">"
          <Link to={"/Form"}>Make Appointment</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  
    <nav className="navbar navber-default">
    <span className="container">
      <span className="nav-bar-one">
        <ul className="nav navbar-nav">
        <li><a href="HomePage">Home Page</a></li>
        <li><a href="Contact">Contact Us!</a></li>
        </ul>
      </span>
    </span>
  </nav>
 
  </div>
  );
}
