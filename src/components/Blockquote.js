import { Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import * as React from 'react';

export default function Blockquote({ color = 'secondary', ...props }) {
    const { palette } = useTheme();
    const borderColor = palette[color].main;

    // TODO: Add CSS class stuff
    return (
        <Typography sx={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}