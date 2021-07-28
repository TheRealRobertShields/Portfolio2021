import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   center: {
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      width: '90vw',
      padding: 0,
   },
   title: {
      width: '100%',
   },
   video: {
      zIndex: 0,
      // position: 'fixed',
      // top: 0,
      // left: 0,
      // display: 'block',
      width: '90%',
      height: '30%',
      objectFit: 'cover',
      marginTop: '20px',
   },
   root: {
      flexGrow: 1,
   },
}));