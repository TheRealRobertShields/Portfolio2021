import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  app: {
    background: 'linear-gradient(90deg, rgba(68,69,29,1) 0%, rgba(44,27,56,1) 50%, rgba(61,0,0,1) 100%)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
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
  root: {
    flexGrow: 1,
  },
}));