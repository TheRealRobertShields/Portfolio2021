import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      width: '90vw',
   },
   card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '150px',
      height: '200px',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      margin: '20px',
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