import KaTeX from '@matejmazur/react-katex';
import { Alert, AlertTitle } from '@material-ui/core';
import * as React from 'react';

const sanitize = (str) => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

export default function TeX({ children, ...props }) {
    const handleError = React.useCallback((error) => {
        return (
            <Alert severity="error" {...props} >
                <AlertTitle>Error rendering KaTeX expression</AlertTitle>
                {sanitize(error.toString())}
            </Alert>
        )
    });

    return (
        <KaTeX
            block={true}
            math={children}
            renderError={handleError}
            {...props}
        />
    )
}