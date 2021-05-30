import { Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { useRouter } from 'next/router';
import * as React from 'react';

// TODO: Handle other components inside, ie Link
export default function Subheading({ children, showJump, ...props }) {
    if (showJump) {
        const router = useRouter();
        const id = children.toLowerCase().replace(/ /g, '-').replace(/[^A-Za-z0-9-]/g, '');

        return (
            <Typography onClick={() => router.push(router.pathname + '#' + id)} variant="h6" component="p" id={id}  {...props} >
                <LinkIcon /> {children}
            </Typography>
        );
    } else {
        return (
            <Typography variant="h6" component="p" {...props} >
                {children}
            </Typography>
        );
    }

}