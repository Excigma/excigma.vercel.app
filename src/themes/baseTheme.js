const baseTheme = {
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSize: 16,
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
        MuiStack: {
            defaultProps: { spacing: 3 }
        }
    }
};
export default baseTheme;