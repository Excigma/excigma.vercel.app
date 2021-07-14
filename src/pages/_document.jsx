import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="description" content="A gallery of Excigma's projects, notes and other things he tinkers with." />
                    <meta name="theme-color" content="#2f3136" />
                    <meta name="subject" content="Blog" />
                    <meta name="author" content="Excigma" />

                    <meta name="og:type" content="website" />
                    <meta name="og:image" content="/icons/icon-48x48.png" />
                    <meta name="og:site_name" content="Excigma's Webpage" />
                    {/* <meta name="og:description" content="A gallery of Excigma's projects, notes and other things he tinkers with." /> */}

                    <link rel="shortcut icon" href="favicon.ico" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/icons/icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />

                    <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />

                    <meta name="msapplication-TileColor" content="#2f3136" />
                    <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />

                    <link rel="manifest" href="/manifest.webmanifest" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

                {process.env.NODE_ENV === 'production' ? <script async defer data-website-id="0b58b0f1-03c3-4420-aec0-d4ae8e4518c8" data-host-url="https://umami.up.railway.app" src="umami.js"></script> : null}

                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'" />

                <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" />
                </noscript>
            </Html>
        );
    }
}