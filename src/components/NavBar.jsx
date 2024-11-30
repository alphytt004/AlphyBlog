import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h2'>Blog</Typography>
                <Link to='/Home'>
                <Button variant='contained'>Home</Button>
                </Link>
                <Link to='/Add'>
                <Button variant='contained'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar