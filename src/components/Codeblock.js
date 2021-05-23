import { useTheme } from 'components/ThemeProvider';
import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import vb from 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic';

import darkTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import lightTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

SyntaxHighlighter.registerLanguage('visual-basic', vb);

const FONT = 'Inconsolata, Monaco, Consolas, "Ubuntu Mono", "Courier New", Courier, monospace';

export default function Codeblock({children, ...other}) {
    const { dark } = useTheme();

    // 🥛 <-- Eye bleach
    return (
        <SyntaxHighlighter style={{ ...(dark ? darkTheme : lightTheme), ...{ fontFamily: FONT } }}  {...other} >
            {children.trim()}
        </SyntaxHighlighter>
    );
}