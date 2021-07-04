import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Social from './components/Social/Social.jsx';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import './styles.css'
import useStyles from './styles';

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
    <>
      <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/projects'>
              <Projects />
            </Route>
            <Route exact path='/social'>
              <Social />
            </Route>
          </Switch>
          <Navbar />
        </div>
      </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
