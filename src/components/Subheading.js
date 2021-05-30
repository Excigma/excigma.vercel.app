import { Typography } from '@material-ui/core';
import * as React from 'react';

export default function Subheading({ children, ...props }) {
    return (
        <Typography variant="h6" component="p" id={children.toLowerCase().replace(/ /g, '-')}  {...props} >
            {children}
        </Typography>
    );
}