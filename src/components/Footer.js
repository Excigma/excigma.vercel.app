import React from 'react';
import { Box, Button, Checkbox, Container, Stack, Typography } from '@material-ui/core';
import Link from './Link';
import { useTheme } from 'components/ThemeProvider';
import DarkMode from '@material-ui/icons/DarkMode';
import LightMode from '@material-ui/icons/LightMode';

function scrollToTop() {
    if (document.body) document.body.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    const themeState = useTheme();

    return (
        <>
            <footer>
                <Box my={5}>
                    <Container>
                        <Typography variant="h6" component="p" align="center">
                            Excigma's Website
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary" component="p" align="center">
                            Made by Excigma during 2021 to assist notekeeping and study. <Link onClick={scrollToTop}>Scroll to top.</Link>
                        </Typography>
                    </Container>
                </Box>
            </footer>
        </>
    );
}