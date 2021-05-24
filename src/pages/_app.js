import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@material-ui/core';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer.js';
import Header from 'components/Header.js';
import ScrollToTop from 'components/ScrollToTop';
import { ThemeProvider } from 'components/ThemeProvider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import 'styles/globals.css';

export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const name = router.pathname.substring(1).replace(/_/g, ' ').split('/').pop().trim() || '/';
    const path = name === '/' ? name : name.charAt(0).toUpperCase().concat(name.slice(1));

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    return (
        <CacheProvider value={cache} fullWidth>
            <Head>
                <title>{path} - xΣ's Page</title>
                <meta name="og:title" content={`${path} - xΣ's Page`} />
                <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0" />
            </Head>

            <ThemeProvider>
                <CssBaseline />

                <Header />

                <Box my={17.5}>
                    <Container>
                        <Breadcrumbs gutterBottom />

                        <Component {...pageProps} />
                    </Container>
                </Box>

                <ScrollToTop />
                <Footer />
            </ThemeProvider>
        </CacheProvider >
    );
}