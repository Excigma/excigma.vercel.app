import { MDXProvider } from '@mdx-js/react';
import { Box, Container, CssBaseline, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer.js';
import Header from 'components/Header.js';
import ScrollToTop from 'components/ScrollToTop';
import 'katex/dist/katex.min.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyHydrate from 'react-lazy-hydration';
import 'styling/atom-dark.css';
import theme from 'styling/dark';
import { globalStyles } from 'styling/global.js';
import components from 'utils/MDXcomponents';

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

                <LazyHydrate whenIdle>
                    <Header />

                    <Container>
                        <Box my={17.5}>
                            <Stack spacing={3}>
                                <Breadcrumbs />

                                <Typography
                                    variant="h1"
                                    fontWeight="fontWeightMedium"
                                    sx={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'clip',
                                        overflowClipMargin: '1em'
                                    }}>
                                    {path}
                                </Typography>

                                <br />

                                {/* Bad performance; large bundle size from components imports..., fix later */}
                                <MDXProvider components={components}>
                                    <Component {...pageProps} />
                                </MDXProvider>
                            </Stack>
                        </Box>
                    </Container>

                    <Footer />

                    <ScrollToTop />
                </LazyHydrate>
            </ThemeProvider>
        </>
    );
}