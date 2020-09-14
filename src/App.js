import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile/>
    </ThemeProvider>
  );
}

export default App;
