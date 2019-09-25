import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#1EB980',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#2BB582', // Used in default state of button
      dark: '#128158', // Used in hover state of button
      contrastText: '#fff' // Used in button text
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        top: 'none',
        position: 'static'
      }
    },
    MuiButton: {
      root: {
        margin: 10
      }
    },
    MuiFab: {
      root: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10
      }
    }
  }
});

export default theme;
