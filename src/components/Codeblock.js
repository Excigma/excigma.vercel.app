import * as React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import basic from 'react-syntax-highlighter/dist/cjs/languages/prism/basic';
import vb from 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic';
import darkTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';


SyntaxHighlighter.registerLanguage('visual-basic', vb);
SyntaxHighlighter.registerLanguage('basic', basic);

export default function Codeblock({ children, language, ...other }) {
    // fortran basic

    // 🥛 <-- Eye bleach
    return (
        <>
            {language && <pre>Example code ({language.charAt(0).toUpperCase() + language.replace(/-/g, ' ').slice(1)}):</pre>}
            <SyntaxHighlighter
                style={darkTheme}
                codeTagProps={{ style: { fontFamily: '"Fira Code", "Inconsolata", "Monaco", "Consolas", "Ubuntu Mono", "Courier New", "Courier", "monospace"' } }}
                showLineNumbers
                language={language == 'psuedocode' ? 'fortran' : language}
                {...other}>
                {children.trim()}
            </SyntaxHighlighter>
        </>
    );
}