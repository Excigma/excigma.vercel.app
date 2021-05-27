import { blue, grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import baseTheme from './baseTheme';

const theme = createTheme({
    ...baseTheme,
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
        },
    },
});

export default theme;