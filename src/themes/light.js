import { blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import defaultTheme from './default';

const theme = createTheme({
    ...defaultTheme,
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