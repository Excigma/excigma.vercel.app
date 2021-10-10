import { Typography } from '@mui/material';
import * as React from 'react';

export default function Heading(props) {
    return (
        <Typography variant="h2" component="p" {...props} />
    );
}