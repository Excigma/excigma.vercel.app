import React from 'react';
import { Box, Checkbox, Container, Typography } from '@material-ui/core';
import Link from './Link';
import { useTheme } from 'components/ThemeProvider';
import DarkMode from '@material-ui/icons/DarkMode';
import LightMode from '@material-ui/icons/LightMode';

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

                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            <Checkbox style={{ color: 'white' }} icon={<DarkMode />} checkedIcon={<LightMode />} onChange={() => themeState.toggle()} checked={themeState.dark} />
                            Made by Excigma during 2021 to assist notekeeping and study. <Link href="#top">Scroll to top.</Link>
                        </Typography>

                    </Container>
                </Box>
            </footer>
        </>
    );
}