import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core'

import useStyles from './styles.js'

const Navbar = ({ font }) => {
   const classes = useStyles()

   return (
      <>
         <AppBar elevation={0} color='transparent' position='relative'>
            <Toolbar disableGutters style={{justifyContent: 'space-between'}}>
               <Typography component={Link} to='/' className={classes.title}>
                  Robert Shields
               </Typography>
               {/* <Typography component={Link} to='/about' className={classes.link}>
                  About
               </Typography> */}
               <Container className={classes.navLinks}>
                  <Typography component={Link} to='/projects' className={classes.link}>
                     Projects
                  </Typography>
                  <Typography component={Link} to='/social' className={classes.link}>
                     Social
                  </Typography>
               </Container>
            </Toolbar>
         </AppBar>
      </>
   )
}

export default Navbar
