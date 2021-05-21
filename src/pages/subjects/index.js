import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { subjects } from '../../config';

export default function Home() {
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={7}>
                    <Grid item xs={12}>
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
                        <Grid item xs={12} key={index}>
                            <Typography variant="h5" component="h4" gutterBottom>
                                {subject}
                            </Typography>

                            <Typography gutterBottom>
                                idk some links in the future
                                <br/>
                                Go to: Notes
                                <br/>
                                Go to: Past papers
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}