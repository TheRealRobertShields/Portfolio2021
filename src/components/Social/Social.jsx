import React from 'react'

import useStyles from './styles';
import coffee from '../../assets/coffee.mp4'
import { Toolbar } from '@material-ui/core';

const Social = () => {
   const classes = useStyles()
   
   return (
      <>
         <Toolbar disableGutters/>
         <div className={classes.container}>
            <div className={classes.card}>
               hello
            </div>
            <div className={classes.card}>
               hello
            </div>
            <div className={classes.card}>
               hello
            </div>
         </div>



         <video className={classes.video} autoPlay loop muted>
            <source src={coffee} type='video/mp4' />
         </video>
      </>
   )
}

export default Social
