import { Typography } from '@material-ui/core';
import { useTheme } from 'components/ThemeProvider';
import * as React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import basic from 'react-syntax-highlighter/dist/cjs/languages/prism/basic';
import vb from 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic';
import darkTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import lightTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';


SyntaxHighlighter.registerLanguage('visual-basic', vb);
SyntaxHighlighter.registerLanguage('basic', basic);

export default function Codeblock({ children, language, ...other }) {
    const { dark } = useTheme();


    // fortran basic

    // 🥛 <-- Eye bleach
    return (
        <>
            {language && <Typography>{language.charAt(0).toUpperCase() + language.replace(/-/g, ' ').slice(1)}</Typography>}

            <SyntaxHighlighter
                style={dark ? darkTheme : lightTheme}
                codeTagProps={{ style: { fontFamily: '"Fira Code", "Inconsolata", "Monaco", "Consolas", "Ubuntu Mono", "Courier New", "Courier", "monospace"' } }}
                showLineNumbers
                language={language == 'psuedocode' ? 'fortran' : language}
                {...other}>
                {children.trim()}
            </SyntaxHighlighter>
        </>
    );
}