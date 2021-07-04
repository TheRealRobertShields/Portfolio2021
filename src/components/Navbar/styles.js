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
      marginRight: '1%',
      color: 'white',
      textDecoration: 'none',
   },
   link: {
      ...theme.typography.button,
      fontSize: 'calc(6px + 0.5vw)',
      padding: 'calc(1px + 0.125vw) 0',
      marginRight: '2%',
      lineHeight: 'calc(8px + 0.5vw)',
      borderBottom: '1px solid #939393',
      color: 'white',
      textDecoration: 'none',
   },
}));