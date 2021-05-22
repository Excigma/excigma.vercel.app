import {  Button, Card, CardContent, CardActions, Grid, Typography, Fade } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';
import { subjects } from '../../config';
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';
import AlertTitle from '@material-ui/core/AlertTitle';

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

                    <Stack spacing={1}>
                        <Alert severity="warning">
                            <AlertTitle>Info</AlertTitle>
                            Currently, getting the pastpapers to work again is low priority for myself. It takes a whole lot of time to get it to work, and is difficult and not important to do right now.</Alert>

                        <Alert severity="info">
                            <AlertTitle>Disclaimer</AlertTitle>
                            Some things here possibly work just well enough. Just. Please double check all information on this site is correct - even my notes. I will try to maintain a level of accuracy of the information provided here as I will use it to study myself; however this is NOT guaranteed. Please PLEASE double check.</Alert>
                    </Stack>
                </Grid>

                {subjects.map((subject, index) => (
                    <Grid item xs={12} key={index} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h4">
                                    {subject.replaceAll('_', ' ')}
                                </Typography>

                                <Typography>
                                        Some notes and pastpapers (not yet) for {subject.replaceAll('_', ' ')}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained" color="primary" href={'/subjects/' + subject} component={Link} style={{ color: 'white' }}>Notes</Button>
                                <Button href={'/subjects/' + encodeURIComponent(subject)} component={Link} disabled>Pastpapers: Coming soon</Button>
                            </CardActions>
                        </Card>
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
                            <Button variant="contained" color="primary" href="/subjects" component={Link} style={{ color: 'white' }} disabled>Notes</Button>
                            <Button href="/subjects" component={Link} style={{ color: 'white' }} disabled>Pastpapers</Button>
                        </CardActions>
                    </Card>
                </Grid> 
            </Grid>
        </>
    );
}