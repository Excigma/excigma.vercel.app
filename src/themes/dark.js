import { blue, grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import defaultTheme from './default';

const theme = createTheme({
    ...defaultTheme,
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