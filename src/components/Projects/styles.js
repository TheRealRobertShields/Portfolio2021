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
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 'calc(200px + 10vw)',
      height: 'calc(200px + 10vw)',
      margin: '20px',  
      backgroundColor: 'rgb(255 255 255 / 6%)',
      borderRadius: '4px',
      borderLeft: '1px solid rgb(255 255 255 / 5%)',
      borderTop: '1px solid rgb(255 255 255 / 5%)',
      borderRight: '1px solid rgb(255 255 255 / 3%)',
      borderBottom: '1px solid rgb(255 255 255 / 3%)',
      fontSize: 'calc(8px + 0.25vw)',
      color: 'rgb(255 255 255 / 100%)',
      textDecoration: 'none',
      transition: 'all 0.2s',
      '&:hover': {
         backgroundColor: 'rgb(255 255 255 / 7%)',
         borderLeft: '1px solid rgb(255 255 255 / 15%)',
         borderTop: '1px solid rgb(255 255 255 / 15%)',
         borderRight: '1px solid rgb(255 255 255 / 10%)',
         borderBottom: '1px solid rgb(255 255 255 / 10%)',
         transform: 'scale(1.05)'
      },
   },
   caption: {
      fontWeight: 'bold',
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