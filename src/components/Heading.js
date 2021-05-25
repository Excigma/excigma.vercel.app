import { Typography } from '@material-ui/core';
import * as React from 'react';

export default function Heading(props) {
    return (
        <Typography
            variant="h2"
            fontWeight="fontWeightMedium"
            sx={{
                textOverflow: 'ellipsis',
                overflow: 'clip',
                overflowClipMargin: '1em'
            }}
            {...props}
        />
    );
}