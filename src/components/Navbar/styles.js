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
      fontSize: '2rem',
      flexGrow: 1,
      padding: theme.spacing(2),
   },
}));