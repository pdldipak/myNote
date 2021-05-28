import { createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple['A600'],
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});
