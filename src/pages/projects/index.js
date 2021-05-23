
import { Button, Card, CardActions, CardContent, Grid, Stack, Typography } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

import Alert from '@material-ui/core/Alert';
import AlertTitle from '@material-ui/core/AlertTitle';


export default function Page() {
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                Subjects.
            </Typography>

            <Typography variant="h5" component="h3">
                This is where you'd choose a subject and get more things like notes and past papers.
            </Typography>

            <Alert severity="info">
                <AlertTitle>Outdated</AlertTitle>
                List is incomplete, and some of the things listed here are from ancient projects that I've since not worked on anymore. 
            </Alert>

            <Grid container item xs={12} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h3">
                        2021
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h4">
                                        This site
                            </Typography>

                            <Typography>
                                        Yea, literally nothing else I made since 2013 have survived until this day. :crying_face_with_tear:
                                         
                                        Many projects just ended up not being useful, either superseded by better existing software or just became not useful
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button variant="contained" color="primary" href="/" component={Link} style={{ color: 'white' }}>:c</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}