import { Typography } from '@material-ui/core';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function PageContent() {
    return (
        <>
            <Subheading>
                Maybe try reconnecting to the internet ..or maybe the server is just dead right now
            </Subheading>

            <Typography>
                in the meantime you can <Link href="/"><b>Goto</b> home</Link>
            </Typography>
        </>
    );
}
