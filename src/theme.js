import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10a37f', // ChatGPT-like green accent
    },
    background: {
      default: '#121212', // dark background like ChatGPT
      paper: '#1e1e1e',   // slightly lighter for cards/papers
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
});

export default darkTheme;
