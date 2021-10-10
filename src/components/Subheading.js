import LinkIcon from '@mui/icons-material/Link';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

// TODO: Handle other components inside, ie Link
export default function Subheading({ children, showJump, ...props }) {
    if (showJump) {
        const router = useRouter();
        const id = children.toLowerCase().replace(/ /g, '-').replace(/[^A-Za-z0-9-]/g, '');
        const clickHandler = React.useCallback(() => router.push(router.pathname + '#' + id));

        return (
            <Typography onClick={clickHandler} variant="h4" component="p" id={id}  {...props} >
                <LinkIcon /> {children}
            </Typography>
        );
    } else {
        return (
            <Typography variant="h4" component="p" {...props} >
                {children}
            </Typography>
        );
    }

}