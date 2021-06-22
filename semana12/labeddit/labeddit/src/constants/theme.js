import { createMuiTheme } from '@material-ui/core/styles';
import { buttonPrimary, buttonSecondary, textPrimaryColor, textSecondaryColor } from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: buttonPrimary,
      contrastText: '#F9FCFE',
    },
    secondary: {
      main: buttonSecondary,
      contrastText: '#F9FCFE',
    },
    text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
    }
  },
});

export default theme