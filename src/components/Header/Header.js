  
import React from 'react';
import { AppBar , Toolbar, Typography, } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'


export default function Header() {
    return (
        <div className="Navbar" >
        <AppBar  className="Navbar__Container">
          <Toolbar className="Navbar__Toolbar">
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Inicio
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}