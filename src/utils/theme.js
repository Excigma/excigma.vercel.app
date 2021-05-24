import { blue, grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
export default function theme(isDark = true) {
    return createTheme({
        typography: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontSize: 16,
        },
        palette: {
            mode: isDark ? 'dark' : 'light',
            grey: {
                main: isDark ? grey[900] : blue[700]
            },
            primary: {
                main: isDark ? blue[900] : blue[500]
            },
            secondary: {
                main: !isDark ? blue[700] : blue[400]
            },
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
            }
        }
    });
}
