import { Typography } from '@material-ui/core';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading>
                Well then. I could not find this page anywhere; I don't know how you got here. Nevertheless, you probably want to <Link href="/"><b>Goto</b> home</Link>
            </Subheading>

            <Typography>
                Maybe I'll add an easter egg some day when I can be bothered ¯\_(ツ)_/¯ just for the fun-sies
            </Typography>
        </>
    );
}
