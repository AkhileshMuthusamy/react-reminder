import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#0DCAE8',
      dark: '#006db3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#19212B'
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        top: 'none'
      }
    }
  }
});

export default theme;
