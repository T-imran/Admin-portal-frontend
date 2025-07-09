import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import darkTheme from './theme';
import '@fontsource/poppins';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> {/* resets default styles, applies dark background */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
