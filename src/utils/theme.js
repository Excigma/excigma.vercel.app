import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createTheme({
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: 16,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: blue['900'],
        },
        secondary: {
            main: blue['400'],
        },
        contrastThreshold: 5
    },
    components: {
        MuiCard: {
            styleOverrides: { root: { padding: '1em' } },
        }
    }
});
    

export default theme;
    