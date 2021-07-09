import React from 'react'

import { Typography } from '@material-ui/core';

// import thinking from '../../assets/thinking.mp4'
import fotogrid from '../../assets/fotogrid_thumbnail.png'
import useStyles from './styles';

const Projects = () => {
   const classes = useStyles()

   return (
      <>
      {/* <div className={classes.app}>
         <video className={classes.video} autoPlay loop muted>
            <source src={thinking} type='video/mp4' />
         </video>
      </div> */}

      <div className={classes.center}>
         <Typography variant='h3' align='center' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>Check out some of my projects!</Typography>
         <div className={classes.container}>
            <a href='https://github.com/TheRealRobertShields' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={fotogrid} alt='fotogrid' style={{width: 'calc(150px + 10vw)'}} />
               <p>TheRealRobertShields</p>
            </a>
            <a href='https://github.com/TheRealRobertShields' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={fotogrid} alt='fotogrid' style={{width: 'calc(150px + 10vw)'}} />
               <p>TheRealRobertShields</p>
            </a>
            <a href='https://github.com/TheRealRobertShields' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={fotogrid} alt='fotogrid' style={{width: 'calc(150px + 10vw)'}} />
               <p>TheRealRobertShields</p>
            </a>
            <a href='https://github.com/TheRealRobertShields' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={fotogrid} alt='fotogrid' style={{width: 'calc(150px + 10vw)'}} />
               <p>TheRealRobertShields</p>
            </a>

         </div>
      </div>



      </>
   )
}

export default Projects
