
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/core/Alert';
import AlertTitle from '@material-ui/core/AlertTitle';
import Link from 'components/Link';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Typography variant="h5" component="h3">
                This is where you'd choose a subject and get more things like notes and past papers.
            </Typography>

            <Alert severity="info">
                <AlertTitle>Outdated</AlertTitle>
                List is incomplete, and some of the things listed here are from ancient projects that I've since not worked on anymore. 
            </Alert>

            <Grid container item xs={12} spacing={2}>
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
                            <Button variant="contained" href="/" component={Link} sx={{ color: 'white' }}>:c</Button>
                        </CardActions>
                    </Card>
                </Grid>


                
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h4">
                                Text to KaTeX
                            </Typography>

                            <Typography>
                                Mostly used for this website, you can find other ones online but idk lol
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button variant="contained" href="/projects/KaTeX" component={Link} sx={{ color: 'white' }}>See KaTeX</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}