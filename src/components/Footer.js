import { Box, Button, Stack, Typography } from '@material-ui/core';
import * as React from 'react';

function scrollToTop() {
    if (document.documentElement) document.documentElement.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer>
            <Box my={5}>
                <Stack alignItems="center">
                    <Typography variant="h6" component="p" align="center">
                        Excigma's Webpage
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary" component="p" align="center">
                        Made by Excigma during 2021 to assist notekeeping and study.
                    </Typography>

                    <Button aria-label="Scroll to top" variant="outlined" size="small" color="secondary" onClick={scrollToTop} align="center">
                        Scroll to top
                    </Button>
                </Stack>
            </Box>
        </footer>
    );
}