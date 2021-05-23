import { Box, Container, Typography } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

function scrollToTop() {
    if (document.body) document.body.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer>
            <Box my={5}>
                <Container>
                    <Typography variant="h6" component="p" align="center">
                        Excigma's Website
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary" component="p" align="center">
                        Made by Excigma during 2021 to assist notekeeping and study.
                    </Typography>

                    <Link onClick={scrollToTop} align="center">Scroll to top.</Link>
                </Container>
            </Box>
        </footer>
    );
}