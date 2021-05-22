import { Typography } from '@material-ui/core';
import React from 'react';
import theme from 'utils/theme';

// TODO: Fix color
export default function Blockquote(props) {
    return (
        <Typography style={{ borderLeft: '5px solid ' + theme.palette.secondary.main, paddingLeft: '1.5rem', margin: '20px 0' }} {...props}/>
    );
}