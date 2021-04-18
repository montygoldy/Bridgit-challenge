import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0076ff',
    },
    secondary: {
      main: '#000',
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    }
});

export default theme;