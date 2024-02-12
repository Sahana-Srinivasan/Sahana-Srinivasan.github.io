import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import './App.css';
import Profile from './Profile';
import Accordion from './Accordion';
import Campus from './Campus';
import Projects from './Projects';
import Interests from './Interests'


import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/home" component={Profile} />
            <Route exact path="/experience" component={Accordion} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/interests" component={Interests} />
            <Route component={() => <Redirect to="/Home" />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
