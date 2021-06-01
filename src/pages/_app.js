import { Box, Container, CssBaseline, Stack, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer.js';
import Header from 'components/Header.js';
import ScrollToTop from 'components/ScrollToTop';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { globalStyles } from 'styles/global.js';
import 'styles/katex.min.css';
import theme from 'themes/dark';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // Maybe I should move this to a function
    const name = router.pathname.substring(1).replace(/_/g, ' ').split('/').pop().trim() || 'Home';
    const path = name.charAt(0).toUpperCase().concat(name.slice(1));

    return (
        <>
            <Head>
                <title>{path} - xΣ's Page</title>
                <meta name="og:title" content={`${path} - xΣ's Webpage`} />
                <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0" />

                {globalStyles}
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header />

                <Box my={17.5}>
                    <Container>
                        <Breadcrumbs />

                        <Stack>
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