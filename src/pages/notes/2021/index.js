import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export default function Page() {
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" fontWeight="fontWeightMedium" gutterBottom>
                        2021.
                    </Typography>

                    <Typography variant="h5" component="h3" gutterBottom>
                        Wow. Wild. Not much better than 2020, but still better nevertheless.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}