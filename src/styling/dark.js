import { blue, grey } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/styles';

const theme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        grey: {
            main: grey[900]
        },
        primary: {
            main: blue[900]
        },
        secondary: {
            main: blue[400]
        }
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    },
    components: {
        MuiCard: {
            styleOverrides: { root: { padding: '1em' } },
        },
        MuiGrid: {
            styleOverrides: { root: { padding: '10px 10px 10px 10px' } },
        },
        MuiLink: {
            defaultProps: { color: 'secondary' }
        },
        MuiFab: {
            styleOverrides: { root: { position: 'fixed', bottom: '25px', right: '25px' } },
            defaultProps: { color: 'primary' }
        },
        MuiAppBar: {
            defaultProps: { color: 'grey' }
        },
    },
}));

export default theme;