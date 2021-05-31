import * as React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import visualBasic from 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic';
import codeTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import * as psuedocode from 'utils/psuedocode';

SyntaxHighlighter.registerLanguage('visual-basic', visualBasic);
SyntaxHighlighter.registerLanguage('psuedocode', psuedocode);

export default function Codeblock({ children, language, ...other }) {
    // 🥛 <-- Eye bleach

    return (
        <>
            {language && <pre>Example code ({language.charAt(0).toUpperCase() + language.replace(/-/g, ' ').slice(1)}):</pre>}
            <SyntaxHighlighter
                showLineNumbers
                style={codeTheme}
                codeTagProps={{ style: { fontFamily: '"Fira Code", "Inconsolata", "Monaco", "Consolas", "Ubuntu Mono", "Courier New", "Courier", "monospace"' } }}
                language={language}
                {...other}>
                {children.trim()}
            </SyntaxHighlighter>
        </>
    );
}