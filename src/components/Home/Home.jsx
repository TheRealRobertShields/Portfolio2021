import React from 'react'
import { Typography } from '@material-ui/core';

// import paddling from '../../assets/paddling.mp4'
import useStyles from './styles';
import { Container } from '@material-ui/core';

const Home = () => {
   const classes = useStyles()

   return (
      <div className={classes.center}>
         <Container className={classes.titleContainer}>
            <Typography variant='h3' align='center' className='titleAnimated' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}></Typography>
            <Typography variant='h3' align='center' className='title' style={{fontSize:'calc(8px + 1vw)', width:'50%'}}>Developer</Typography>
         </Container>

         
      </div>
   )
}

export default Home
