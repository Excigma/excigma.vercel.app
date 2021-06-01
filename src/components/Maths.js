import { Alert, AlertTitle, Typography } from '@material-ui/core';
import KaTeX from 'katex';
import * as React from 'react';

const sanitize = (str) => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

export default function Maths({ children, onEvaluate, ...props }) {
    try {
        const html = KaTeX.renderToString(children, {
            throwOnError: true,
            displayMode: true,
            trust: false
        });

        if (onEvaluate) onEvaluate(false);

        return (
            <Typography dangerouslySetInnerHTML={{ __html: html }} {...props} />
        );
    } catch (e) {
        if (onEvaluate) onEvaluate(true);

        return (
            <Alert severity="error" {...props} >
                <AlertTitle>Error rendering KaTeX expression</AlertTitle>
                {sanitize(e.toString())}
            </Alert>
        );
    }
}