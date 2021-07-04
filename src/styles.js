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
    position: 'fixed',
    zIndex: -1,
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
}));