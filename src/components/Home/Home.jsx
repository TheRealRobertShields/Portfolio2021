import React from 'react'
import { Typography } from '@material-ui/core';

// import paddling from '../../assets/paddling.mp4'
import useStyles from './styles';

const Home = () => {
   const classes = useStyles()

   return (
      <div className={classes.app}>
         <Typography variant='h3' align='center' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>Landing page content coming soon!</Typography>
         
      </div>
   )
}

export default Home
