import { Box, Button, Container, CssBaseline, Snackbar, Stack, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer.js';
import Header from 'components/Header.js';
import ScrollToTop from 'components/ScrollToTop';
import 'katex/dist/katex.min.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import theme from 'styling/dark';
import { globalStyles } from 'styling/global.js';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [update, setUpdate] = React.useState(false);

    // Maybe I should move this to a function
    const name = router.pathname.substring(1).replace(/_/g, ' ').split('/').pop().trim() || 'Home';
    const path = name.charAt(0).toUpperCase().concat(name.slice(1));

    React.useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
            window.workbox.addEventListener('waiting', () => setUpdate(true));
            window.workbox.register();
        }
    }, []);

    const reload = React.useCallback(() => {
        window.workbox.addEventListener('controlling', () => window.location.reload());
        window.workbox.messageSkipWaiting();
    });

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

                <Snackbar
                    open={update}
                    message="A newer version of this web app is available, reload to update"
                    key="update"
                    action={
                        <Button onClick={reload} aria-label="Reload" color="secondary">
                            Reload
                        </Button>
                    } />

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