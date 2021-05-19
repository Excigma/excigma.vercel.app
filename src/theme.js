import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: 16,
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#0061b0',
        },
        secondary: {
            main: '#2196f3',
        }
    },
});

export default theme;