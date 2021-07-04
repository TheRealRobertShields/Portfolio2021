import React from 'react'

import useStyles from './styles';
import coffee from '../../assets/coffee.mp4'

const Social = () => {
   const classes = useStyles()
   
   return (
      <div className={classes.app}>
         <video className={classes.video} autoPlay loop muted>
            <source src={coffee} type='video/mp4' />
         </video>
      </div>
   )
}

export default Social
