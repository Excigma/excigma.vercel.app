import { Typography } from '@material-ui/core';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading>
                Maybe try reconnecting to the internet, in the meantime you can <Link href="/"><b>Goto</b> home</Link>
            </Subheading>

            <Typography>..or maybe the server is just dead right now</Typography>
        </>
    );
}
