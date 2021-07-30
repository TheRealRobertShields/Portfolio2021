import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      width: '90vw',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]: {
         // flexWrap: 'nowrap',
      },
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      paddingBottom: '50px',
   },
   card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'calc(125px + 2.25vw)',
      height: '200px',
      margin: '20px',  
      backgroundColor: 'rgb(255 255 255 / 10%)',
      borderRadius: '4px',
      borderLeft: '1px solid rgb(255 255 255 / 10%)',
      borderTop: '1px solid rgb(255 255 255 / 10%)',
      borderRight: '1px solid rgb(255 255 255 / 5%)',
      borderBottom: '1px solid rgb(255 255 255 / 5%)',
      fontSize: 'calc(8px + 0.25vw)',
      fontWeight: '100',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.2s',
      '&:hover': {
         transform: 'scale(1.1)'
      },
   },
   caption: {
      fontSize: 'calc(5px + 1vw)',
   },
   video: {
      zIndex: -1,
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
   },
   img: {
      border: '4px solid white',
      borderRadius: '4px',
   }
}));