import { Alert, AlertTitle } from '@material-ui/core';
import * as React from 'react';

export default function Information({ title = 'Information', severity = 'info', children, ...props }) {
    return (
        <Alert severity={severity} {...props}>
            <AlertTitle>
                {title}
            </AlertTitle>

            {children}
        </Alert>
    );
}