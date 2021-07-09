import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90vw',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]: {
         flexWrap: 'nowrap',
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
      width: 'calc(200px + 10vw)',
      height: 'calc(200px + 10vw)',
      margin: '20px',  
      backgroundColor: 'rgb(255 255 255 / 3%)',
      borderRadius: '4px',
      borderLeft: '1px solid rgb(255 255 255 / 5%)',
      borderTop: '1px solid rgb(255 255 255 / 5%)',
      borderRight: '1px solid rgb(255 255 255 / 3%)',
      borderBottom: '1px solid rgb(255 255 255 / 3%)',
      fontSize: 'calc(8px + 0.25vw)',
      fontWeight: '100',
      color: 'rgb(255 255 255 / 50%)',
      textDecoration: 'none',
      transition: 'all 0.3s',
      '&:hover': {
         color: 'rgb(255 255 255 / 100%)',
         background: 'rgb(255 255 255 / 6%)',
         transform: 'scale(1.1)'
      },
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
}));