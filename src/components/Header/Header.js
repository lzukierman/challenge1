
import React from 'react';
import { AppBar, Toolbar, Typography, } from "@material-ui/core";


import './Header.css'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="Navbar" >
      <AppBar className="Navbar__Container">
        <Toolbar className="Navbar__Toolbar">
          <div className='link'>
            <Link to='/form'>
              <Typography className='type'  variant='h6'>
                Form
           </Typography>
            </Link>
          </div>
          <div className='link'>
            <Link to='/'>
              <Typography className='type' variant='h6'>
                Home
           </Typography>
            </Link>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  )
}