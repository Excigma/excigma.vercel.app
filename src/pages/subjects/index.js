import { Box, Button, Card, Container, CardContent, CardActions, Grid, Paper, Typography } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';
import { subjects } from '../../config';

export default function Home() {
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={5}>
                    <Grid item xs={12} gutterBottom>
                        <Typography variant="h2" gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                Subjects.
                            </Box>
                        </Typography>

                        <Typography variant="h5" component="h3" gutterBottom>
                            This is where you'd choose a subject and get more things like notes and past papers.
                        </Typography>
                    </Grid>

                    {subjects.map((subject, index) => (
                        <Grid item xs={12} key={index} md={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h4" gutterBottom>
                                        {subject}
                                    </Typography>

                                    <Typography gutterBottom>
                                        Some notes and pastpapers for {subject}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button variant="contained" color="primary" href="/subjects" component={Link} style={{ color: 'white' }}>Notes</Button>
                                    <Button href="/subjects" component={Link} style={{ color: 'white' }}>Pastpapers</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                    <Grid item xs={12} md={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h4" gutterBottom>
                                        More...?
                                </Typography>

                                <Typography gutterBottom>
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
            </Box>
        </Container>
    );
}