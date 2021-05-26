
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => { },
});

const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState(false);

    React.useEffect(() => {
        const lsDark = localStorage.getItem('dark') === 'true';
        setThemeState(lsDark);
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children, ...props }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    const currentTheme = themeState ? darkTheme : lightTheme;

    const toggle = () => {
        const dark = !themeState;
        localStorage.setItem('dark', JSON.stringify(dark));
        setThemeState(dark);
    };

    return (
        <MuiThemeProvider theme={currentTheme} {...props}>
            <ThemeContext.Provider value={{ dark: themeState, toggle }}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export { ThemeProvider, useTheme };

