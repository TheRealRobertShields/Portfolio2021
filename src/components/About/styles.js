import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   app: {
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100vh',
      padding: 0,
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
   root: {
      flexGrow: 1,
   },
}));