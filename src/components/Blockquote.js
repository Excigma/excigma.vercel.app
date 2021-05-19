import { Typography } from '@material-ui/core';
import React from 'react';

export default function Blockquote(props) {
    return (
        <Typography style={{ borderLeft: '5px solid #0061b0', paddingLeft: '1.5rem', margin: '20px 0' }} {...props}/>
    );
}