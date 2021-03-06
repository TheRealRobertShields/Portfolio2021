import React from 'react'

import { Typography } from '@material-ui/core';

// import thinking from '../../assets/thinking.mp4'
// import fotogrid from '../../assets/fotogrid_thumbnail.png'
import okisfreezedried from '../../assets/okisfreezedried.png'
import datadoctor from '../../assets/datadoctor.png'
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
         {/* <Typography variant='h3' align='center' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>Check out some of my projects!</Typography> */}
         <div className={classes.container}>
            <a href='https://okisfreezedried.com' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={okisfreezedried} alt='okisfreezedried' style={{width: '48px'}} />
               <Typography variant='subtitle1' className={classes.caption}>OkisFreezedried</Typography>
            </a>
            <a href='https://data-doctor.netlify.app/' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={datadoctor} alt='datadoctor' style={{width: '48px'}} />
               <Typography variant='subtitle1' className={classes.caption}>DataDoctor</Typography>
            </a>
            {/* <a href='https://fotogrid.netlify.app/' target='_blank' without rel="noreferrer" className={classes.card}>
               <img src={fotogrid} alt='fotogrid' style={{width: 'calc(150px + 10vw)'}} />
               <Typography variant='subtitle1' className={classes.caption}>FotoGrid</Typography>
            </a> */}

         </div>
      </div>



      </>
   )
}

export default Projects
