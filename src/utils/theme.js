import { blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = mode => createTheme({
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: 16,
    },
    palette: {
        mode: mode === 'dark' ? 'dark' : 'light',
        primary: {
            main: blue['900'],
        },
        secondary: {
            main: blue['500'],
        },
        contrastThreshold: 5
    },
    components: {
        MuiCard: {
            styleOverrides: { root: { padding: '1em' } },
        },
        MuiGrid: {
            styleOverrides: { root: { padding: '10px 10px 10px 10px' } },
        },
        MuiLink: {
            defaultProps: {
                color: 'secondary',
            }
        }
    }
});

export default theme;