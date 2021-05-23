import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

export default function Home() {
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom>
                        <Box fontWeight="fontWeightMedium">
                           Projects.
                        </Box>
                    </Typography>
                </Grid>
                    
                <Grid item xs={12}>
                    <Typography variant="h5" component="h4">
                        This site
                    </Typography>

                    <Typography>
                        Yea, literally nothing else I made since 2013 have survived until this day. :crying_face_with_tear:
                    </Typography>
                    
                    <Typography>
                            Many projects just ended up not being useful, either superseded by better existing software or just became not useful
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
