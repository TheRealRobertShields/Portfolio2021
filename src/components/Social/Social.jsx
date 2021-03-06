import React from 'react'

import useStyles from './styles';
// import coffee from '../../assets/coffee.mp4'
import { Typography } from '@material-ui/core';
import Github from '../../assets/github.png'


const Social = () => {
   const classes = useStyles()
   
   return (
      <>
         <div className={classes.center}>
            <Typography variant='h3' align='center' style={{fontSize:'calc(8px + 1vw)'}}>Feel free to add/message me!</Typography>
            <div className={classes.container}>
               <a href='https://github.com/TheRealRobertShields' target='_blank' without rel="noreferrer" className={classes.card}>
                  <img src={Github} alt='github' />
                  {/* <p>TheRealRobertShields</p> */}
                  <Typography variant='subtitle1' className={classes.caption}>GitHub</Typography>
               </a>
               <a href='https://www.linkedin.com/in/robert-shields-4b70541b6/' target='_blank' without rel="noreferrer" className={classes.card}>
                  <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='linkedin' />
                  {/* <p>Robert Shields</p> */}
                  <Typography variant='subtitle1' className={classes.caption}>LinkedIn</Typography>
               </a>
               <a href='mailto:robert.shields.dev@gmail.com?subject=Hello Robert!&body=My name is ...' className={classes.card}>
                  <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt='github' />
                  {/* <p>robert.shields.dev</p> */}
                  <Typography variant='subtitle1' className={classes.caption}>Gmail</Typography>
               </a>
            </div>
         </div>


         {/* <div className={classes.videoWrapper}>
            <video className={classes.video} autoPlay loop muted>
               <source src={coffee} type='video/mp4' />
            </video>
         </div> */}
      </>
   )
}

export default Social
