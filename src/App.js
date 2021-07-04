import useStyles from './styles';
import './styles.css'
import Navbar from './components/Navbar/Navbar.jsx'
import coffee from './assets/coffee.mp4'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },});

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <video className={classes.video} autoPlay loop muted>
            <source src={coffee} type='video/mp4' />
        </video>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
