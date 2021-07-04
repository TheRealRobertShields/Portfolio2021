import React from 'react'

import coffee from '../../assets/coffeeCloser.mp4'
import useStyles from './styles';

const About = () => {
   const classes = useStyles()

   return (
      <div className={classes.app}>
         <video className={classes.video} autoPlay loop muted>
            <source src={coffee} type='video/mp4' />
         </video>
      </div>
   )
}

export default About
