import React from 'react'
// eslint-disable-next-line
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles.js'

const Navbar = ({ font }) => {
   const classes = useStyles()

   return (
      <>
         <AppBar elevation={0} color='transparent'>
            <Toolbar>
               <Typography variant="h2" className={classes.title}>
                  Robert Shields
               </Typography>
            </Toolbar>
         </AppBar>
      </>
   )
}

export default Navbar
