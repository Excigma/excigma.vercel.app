import { Typography } from '@material-ui/core';
import { useTheme } from 'components/ThemeProvider';
import * as React from 'react';
import theme from 'utils/theme';
// TODO: Fix color
export default function Blockquote(props) {
    const { dark } = useTheme();
    const borderColor = theme(dark).palette.secondary.main;

    return (
        <Typography style={{ borderLeft: '5px solid ' + borderColor, paddingLeft: '1.5rem', margin: '20px 0' }} {...props} />
    );
}