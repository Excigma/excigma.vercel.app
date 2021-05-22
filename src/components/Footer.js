import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import Link from './Link';

export default function Footer() {
    return (
        <>
            <footer>
                <Box my={5}>
                    <Container>
                        <Typography variant="h6" component="p" align="center">
                            PastpaperArmyKnife
                        </Typography>

                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
                        Made by Excigma during 2021 to assist study. <Link href="#top">Scroll to top.</Link>
                        </Typography>
                    </Container>
                </Box>
            </footer>
        </>
    );
}