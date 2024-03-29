import { Typography } from '@mui/material';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function PageContent() {
    return (
        <>
            <Subheading>
                Well then. I could not find this page anywhere; I don't know how you got here.
            </Subheading>

            <Typography>
                Nevertheless, right now probably want to <Link href="/"><b>Goto</b> home</Link>
            </Typography>

            <Typography>
                Maybe I'll add an easter egg some day when I can be bothered ¯\_(ツ)_/¯ just for the fun-sies
            </Typography>
        </>
    );
}
