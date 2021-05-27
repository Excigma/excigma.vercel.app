
import * as React from 'react';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

const ThemeContext = React.createContext({
    dark: true,
    toggle: () => { },
});

const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: true,
        hasThemeLoaded: false,
    });

    React.useEffect(() => {
        const lsDark = localStorage.getItem('dark') !== 'false';
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
            {children}
        </MuiThemeProvider>
    );
};

export { ThemeProvider, useTheme };

