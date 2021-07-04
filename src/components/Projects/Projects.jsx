import React from 'react'

import thinking from '../../assets/thinking.mp4'
import useStyles from './styles';

const Projects = () => {
   const classes = useStyles()

   return (
      <div className={classes.app}>
         <video className={classes.video} autoPlay loop muted>
            <source src={thinking} type='video/mp4' />
         </video>
      </div>
   )
}

export default Projects
