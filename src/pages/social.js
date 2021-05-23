import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

export default function Home() {
    return (
        <>
            {/* use stack :@:@:@:@: */}
            
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom>
                        <Box fontWeight="fontWeightMedium">
                           Socials.
                        </Box>
                    </Typography>
                </Grid>
                    
                <Grid item xs={12}>
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
