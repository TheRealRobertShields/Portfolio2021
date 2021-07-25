import React from 'react'
import { Typography } from '@material-ui/core';

import coffee from '../../assets/coffeeCloser.mp4'
import useStyles from './styles';

const About = () => {
   const classes = useStyles()

   return (
      <div className={classes.app}>
         <Typography variant='h3' align='center' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>About page content coming soon!</Typography>

         <video className={classes.video} autoPlay loop muted>
            <source src={coffee} type='video/mp4' />
         </video>
      </div>
   )
}

export default About
