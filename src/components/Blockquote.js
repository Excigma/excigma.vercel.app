import { Typography, useTheme } from '@material-ui/core';
import * as React from 'react';

// TODO: Fix color
export default function Blockquote(props) {
    const { palette } = useTheme();
    const borderColor = palette.secondary.main;

    return (
        <Typography style={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}