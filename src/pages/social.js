import { Grid, Stack, Typography } from '@material-ui/core';
import * as React from 'react';

export default function PageContent() {
    return (
        <Stack>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h4">
                        Discord
                    </Typography>

                    <Typography>
                        Excigma#0337 (Friend Requests are disabled)
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    );
}
