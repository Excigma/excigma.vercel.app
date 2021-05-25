import { Alert, AlertTitle } from '@material-ui/core';
import * as React from 'react';

export default function Info({ title = 'Information', children, ...props }) {
    return (
        <Alert severity="info" {...props}>
            <AlertTitle>{title}</AlertTitle>
            {children}
        </Alert>
    );
}