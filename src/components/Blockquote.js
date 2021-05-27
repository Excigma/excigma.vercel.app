import { Typography } from '@material-ui/core';
import * as React from 'react';
import darkTheme from 'themes/dark';

// TODO: Fix color
export default function Blockquote(props) {
    const borderColor = darkTheme.palette.secondary.main;

    return (
        <Typography style={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}