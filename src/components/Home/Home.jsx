import React from 'react'

import paddling from '../../assets/paddling.mp4'
import useStyles from './styles';

const Home = () => {
   const classes = useStyles()

   return (
      <div className={classes.app}>
         <video className={classes.video} autoPlay loop muted>
            <source src={paddling} type='video/mp4' />
         </video>
      </div>
   )
}

export default Home
