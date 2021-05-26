
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
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeLoaded: false,
    });

    React.useEffect(() => {
        const lsDark = localStorage.getItem('dark') === 'true';
        setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    // FIX: This breaks SSG
    // if (!themeState.hasThemeLoaded) return <div />;

    const currentTheme = themeState.dark ? darkTheme : lightTheme;

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem('dark', JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    return (
        <MuiThemeProvider theme={currentTheme}>
            <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export { ThemeProvider, useTheme };

