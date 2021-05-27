import { blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import baseTheme from './baseTheme';

const theme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        grey: {
            main: blue[700]
        },
        primary: {
            main: blue[500]
        },
        secondary: {
            main: blue[700]
        },
    },
});

export default theme;