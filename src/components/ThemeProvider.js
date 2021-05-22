
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import theme from 'utils/theme';

const defaultContextData = {
    dark: false,
    toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
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

    if (!themeState.hasThemeLoaded) {
    /*
      If the theme is not yet loaded we don't want to render
      this is just a workaround to avoid having the app rendering
      in light mode by default and then switch to dark mode while
      getting the theme state from localStorage
    */
        return <div />;
    }

    const currentTheme = themeState.dark ? theme('dark') : theme('light');

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem('dark', JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    return (
        <MuiThemeProvider theme={currentTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export { ThemeProvider, useTheme };