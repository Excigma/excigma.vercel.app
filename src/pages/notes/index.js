import {  Button, Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';
import { subjects } from '../../subjects';
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';
import AlertTitle from '@material-ui/core/AlertTitle';

const years = Object.keys(subjects);

export default function Page() {
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" fontWeight="fontWeightMedium" gutterBottom>
                        Subjects.
                    </Typography>

                    <Typography variant="h5" component="h3" gutterBottom>
                        This is where you'd choose a subject and get more things like notes and past papers.
                    </Typography>

                    <Alert severity="info">
                        <AlertTitle>Disclaimer</AlertTitle>
                            These notes are all written by myself or quoted from teachers. Whilst I am trying to keep a high standard and a certain level of accuracy as I will be using these notes to study myself, but note I do not have proofreaders - there may be mistakes. If in doubt PLEASE go ask someone more qualified than me. I am not a teacher.
                    </Alert>
                </Grid>

                {years.map((year, i) => (
                    <Grid item container xs={12} key={i} spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h3">
                                {year}
                            </Typography>
                        </Grid>

                        {subjects[year].map((subject, j) => (
                            <Grid item xs={12} key={j} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h4">
                                            {subject.replace(/_/g, ' ')}
                                        </Typography>

                                        <Typography>
                                            Some notes for {subject.replace(/_/g, ' ')}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button variant="contained" color="primary" href={'/notes/2021/' + subject} component={Link} style={{ color: 'white' }}>Notes</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ))}

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h4">
                                More...?
                            </Typography>

                            <Typography>
                                Might do other subjects that I did before if i get bored.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button variant="contained" color="primary" href="/notes" component={Link} style={{ color: 'white' }} disabled>Notes</Button>
                        </CardActions>
                    </Card>
                </Grid> 
            </Grid>
        </>
    );
}