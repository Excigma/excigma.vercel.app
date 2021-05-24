import { createTheme } from '@material-ui/core/styles';

export default function theme(isDark = true) {
    return createTheme({
        typography: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            fontSize: 16,
        },
        palette: {
            mode: isDark ? 'dark' : 'light',
            primary: { main: isDark ? '#0d47a1' : '#2196f3' },
            secondary: { main: !isDark ? '#0069c0' : '#2196f3' },
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
                defaultProps: { color: 'primary' }
            }
        }
    });
}
