import { Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function PageContent() {
    return (
        <>
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
        </>
    );
}
