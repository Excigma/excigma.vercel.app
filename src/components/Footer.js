import { Box, Button, Stack, Typography } from '@material-ui/core';
import * as React from 'react';

function scrollToTop() {
    if (document.body) document.body.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer>
            <Box my={5}>
                <Stack spacing={1} alignItems="center">
                    <Typography variant="h6" component="p">
                        Excigma's Webpage
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary" component="p">
                        Made by Excigma during 2021 to assist notekeeping and study.
                    </Typography>

                    <Button variant="outlined" size="small" color="secondary" onClick={scrollToTop}>
                        Scroll to top
                    </Button>
                </Stack>
            </Box>
        </footer>
    );
}