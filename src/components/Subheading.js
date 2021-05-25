import { Typography } from '@material-ui/core';
import * as React from 'react';

export default function Subheading(props) {
    return (
        <Typography variant="h5" component="h3" {...props} />
    );
}