import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export default function Blockquote(props) {
    const { palette } = useTheme();
    const borderColor = palette.secondary.main;

    // TODO: Add CSS class stuff
    return (
        <Typography sx={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}