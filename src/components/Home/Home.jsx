import React from 'react'
import { Typography } from '@material-ui/core';

// import paddling from '../../assets/paddling.mp4'
import useStyles from './styles';

const Home = () => {
   const classes = useStyles()

   return (
      <div className={classes.center}>
         <Typography variant='h3' align='center' className='titleAnimated' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>Developer.</Typography>
         
      </div>
   )
}

export default Home
