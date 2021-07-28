import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      ...theme.typography.button,
      fontSize: 'calc(12px + 1.25vw)',
      padding: 'calc(12px + 0.5vw)',
      lineHeight: 'calc(12px + 1.25vw)',
      fontWeight: 'bold',
      marginRight: '1%',
      width: 'fit-content',
      color: 'white',
      textDecoration: 'none',
      textAlign: 'center',
      transition: 'all 0.15s',
      '&:hover': {
         transform: 'scale(1.075)',
      },
   },
   link: {
      ...theme.typography.button,
      fontSize: 'calc(10px + 0.5vw)',
      margin: '0 5%',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.15s',
      userSelect: 'none',
      '&:hover': {
         transform: 'scale(1.15)'
      },
   },
   navLinks: {
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      height: '20px',
      alignItems: 'center',
   }
}));