import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';

import createCache from '@emotion/cache';
import theme from '../theme';


export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const name = router.pathname.substring(1);
    const path = name || '/';
    const nicePath = path.charAt(0).toUpperCase() + path.slice(1);

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);
    
    return (
        <CacheProvider value={cache}>
            <Head>
                <title>{nicePath} - PastpaperArmyKnife</title>

                <meta name="robots" content="noindex, nofollow" />

                <meta name="description" content="A storage of Excigma's class notes and some past paper questions - by topic." />
                <meta name="theme-color" content="#2f3136" />
                <meta name="subject" content="Notes"/>
                <meta name="author" content="Excigma" />
                
                <meta name="og:title" content={`${nicePath} - PastpaperArmyKnife`}/>
                <meta name="og:type" content="website"/>
                <meta name="og:image" content="/static/img/favicon-32x32.png"/>
                <meta name="og:site_name" content="PastpaperArmyKnife + Notes"/>
                <meta name="og:description" content="A storage of Excigma's class notes and some past paper questions - by topic."/>
                
                <link rel="shortcut icon" href="favicon.ico" />

                <script src="https://umami.up.railway.app/umami.js"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Head>

            <ThemeProvider theme={theme}>
                <Header />

                <Component {...pageProps} />

                <Footer />
            </ThemeProvider>
        </CacheProvider >
    );
}