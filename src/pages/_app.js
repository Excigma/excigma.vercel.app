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
        <CacheProvider value={cache}>
            <Head>
                <meta charSet="utf-8" />
                <title>{nicePath} - PastpaperArmyKnife</title>

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="noindex, nofollow" /> 

                <meta name="description" content="A storage of Excigma's class notes and some past paper questions - by topic." />
                <meta name="theme-color" content="#2f3136" />
                <meta name="subject" content="Notes"/>
                <meta name="author" content="Excigma" />
                
                <meta name="og:title" content={`${nicePath} - PastpaperArmyKnife`}/>
                <meta name="og:type" content="website"/>
                <meta name="og:image" content="/icons/icon-48x48.png"/>
                <meta name="og:site_name" content="PastpaperArmyKnife + Notes"/>
                <meta name="og:description" content="A storage of Excigma's class notes and some past paper questions - by topic."/>
                
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="favicon.ico" />

                <link rel="apple-touch-icon" href="/icons/icon-72x72.png"></link>
                
                <script async defer data-website-id="881890a9-90ba-4436-9317-cd7f43d11d60" src="https://umami.up.railway.app/umami.js"/>
            </Head>

            <ThemeProvider theme={theme}>
                <Header />

                <Component {...pageProps} />

                <Footer />
            </ThemeProvider>
        </CacheProvider >
    );
}