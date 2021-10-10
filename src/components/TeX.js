import KaTeX from '@matejmazur/react-katex';
import { Alert, AlertTitle } from '@mui/material';
import * as React from 'react';
import LazyHydrate from 'react-lazy-hydration';

const sanitize = (str) => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

export default function TeX({ children, inline = false, ...props }) {
    const handleError = React.useCallback((error) => {
        return (
            <Alert severity="error" {...props} >
                <AlertTitle>Error rendering KaTeX expression</AlertTitle>
                {sanitize(error.toString())}
            </Alert>
        );
    });

    return (
        <LazyHydrate whenVisible >
            <KaTeX
                block={!inline}
                math={children}
                renderError={handleError}
                {...props}
            />
        </LazyHydrate>
    );
}