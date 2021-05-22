import React from 'react';

import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';
import Link from 'components/Link';

export default function ErrorPage() {
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                404 - Page not found
            </Typography>

            <Typography fontWeight="fontWeightMedium">
                Well then. I could not find this page anywhere; I don't know how you got here. Nevertheless, you probably want to <Link href="/"><b>Goto</b> home</Link>
            </Typography>

            <Typography>
                Maybe I'll add an easter egg some day when I can be bothered ¯\_(ツ)_/¯ just for the fun-sies
            </Typography>
        </Stack>
    );
}
