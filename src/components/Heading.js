import { Typography } from '@material-ui/core';
import * as React from 'react';

export default function Heading(props) {
    return (
        <Typography variant="h2" component="p" {...props} />
    );
}