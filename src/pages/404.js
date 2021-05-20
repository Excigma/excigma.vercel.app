
import { Grid, Typography, Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

export default function ErrorPage() {
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={7}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                404 - Page not found
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                Well then. I could not find this page anywhere; I don't know how you got here. Nevertheless, you probably want to <Link href="/"><b>Goto</b> home</Link>
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                Maybe I'll add an easter egg some day when I can be bothered ¯\_(ツ)_/¯ just for the fun-sies
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
