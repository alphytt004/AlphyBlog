import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br />
        <h2>Blog form</h2>
        <TextField variant='outlined' label='Blog Name'/><br /><br />
        <TextField variant='outlined' label='Description'/><br /><br />
        <TextField variant='outlined' label='Author name'/><br /><br />
        <Button variant='contained' color='secondary'>Submit</Button>
        
    </div>
  )
}

export default Add