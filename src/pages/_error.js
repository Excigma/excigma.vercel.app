
import { Grid, Typography, Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

const statusCodes  = {
    400: 'Bad Request',
    404: 'This page could not be found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error',
};
    
export default function ErrorPage({ statusCode, title }) {
    const description = title || statusCodes[statusCode] || 'An unexpected error has occurred';
    
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={7}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                {statusCode || null} {description}
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                                (╯°□°）╯︵ ┻━┻. Well uhh you broke the server. Or maybe I did. We don't know how you got here.
                                <br />
                                Nevertheless, right now probably want to <Link href="/"><b>Goto</b> home</Link>
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
                </Grid>
            </Box>
        </Container>
    );
}


export async function getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}