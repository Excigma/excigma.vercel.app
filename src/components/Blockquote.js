import { Typography } from '@material-ui/core';
import { useTheme } from 'components/ThemeProvider';
import * as React from 'react';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

// TODO: Fix color
export default function Blockquote(props) {
    const { dark } = useTheme();
    const borderColor = (dark ? darkTheme : lightTheme).palette.secondary.main;

    return (
        <Typography style={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}