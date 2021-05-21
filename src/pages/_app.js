import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import 'styles/globals.css';

import Header from 'components/Header.js';
import Footer from 'components/Footer.js';

import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';

import createCache from '@emotion/cache';
import theme from 'theme.js';
import { CssBaseline } from '@material-ui/core';


export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const name = router.pathname.substring(1).replace(/_/g, ' ').trim();
    const path = name || '/';
    const nicePath = path.charAt(0).toUpperCase() + path.slice(1);

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);
        
    return (
        <CacheProvider value={cache} fullWidth>
            <Head>
                <title>{nicePath} - PastpaperArmyKnife</title>
                <meta name="og:title" content={`${nicePath} - PastpaperArmyKnife`} />
                <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0"/>
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </CacheProvider >
    );
}