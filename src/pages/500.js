
import { Grid, Typography, Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

export default function ErrorPage() {
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                500 - Internal Server Error
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                (╯°□°）╯︵ ┻━┻. Well uhh you broke the server. Or maybe I did. We don't know how you got here. Nevertheless, right now probably want to <Link href="/"><b>Goto</b> home</Link>
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                WHY CAN I NOT WRITE GOOD CODE WITH ROBUST ERROR CHECKING REEEEEEEEEEEE
                                <br/>
                                (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                                Thank you for coming to my TED talk.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
