import { Box, Container, CssBaseline, Stack, Typography } from '@material-ui/core';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer.js';
import Header from 'components/Header.js';
import ScrollToTop from 'components/ScrollToTop';
import { ThemeProvider } from 'components/ThemeProvider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { globalStyles } from 'styles/global.js';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const name = router.pathname.substring(1).replace(/_/g, ' ').split('/').pop().trim() || 'Home';
    const path = name === 'Home' ? name : name.charAt(0).toUpperCase().concat(name.slice(1));

    return (
        <>
            <Head>
                <title>{path} - xΣ's Page</title>
                <meta name="og:title" content={`${path} - xΣ's Webpage`} />
                <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0" />
                {globalStyles}
            </Head>

            <ThemeProvider>
                <CssBaseline />
                <Header />

                <Box my={17.5}>
                    <Container>
                        <Breadcrumbs />

                        <Stack spacing={3}>
                            <Typography
                                variant="h2"
                                fontWeight="fontWeightMedium"
                                sx={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'clip',
                                    overflowClipMargin: '1em'
                                }}>
                                {path}

                            </Typography>

                            <Component {...pageProps} />
                        </Stack>
                    </Container>
                </Box>

                <ScrollToTop />

                <Footer />
            </ThemeProvider>
        </>
    );
}