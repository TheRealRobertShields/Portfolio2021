import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      width: '90vw',
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90vw',
   },
   card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '150px',
      height: '200px',
      margin: '20px',  
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '4px',
      borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
      borderTop: '1px solid rgba(255, 255, 255, 0.15)',
      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      fontSize: 'calc(8px + 0.25vw)',
      fontWeight: '100',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s',
      '&:hover': {
         background: 'rgba(255, 255, 255, 0.2)',
         transform: 'scale(1.1)'
      },
   },
   video: {
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
   },
}));