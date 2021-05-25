import { Stack, Typography } from '@material-ui/core';
import Link from 'components/Link';
import * as React from 'react';

export default function ErrorPage() {
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                You're offline
            </Typography>

            <Typography fontWeight="fontWeightMedium">
                Maybe try reconnecting to the internet, in the meantime you can <Link href="/"><b>Goto</b> home</Link>
            </Typography>
        </Stack>
    );
}
