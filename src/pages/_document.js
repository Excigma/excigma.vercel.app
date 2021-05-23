import createEmotionServer from '@emotion/server/create-instance';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const getCache = () => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;

    return cache;
};


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        const cache = getCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            // eslint-disable-next-line react/display-name
            enhanceComponent: (Component) => (props) => (
                <CacheProvider value={cache}>
                    <Component {...props} />
                </CacheProvider>
            ),
        });

        const initialProps = await Document.getInitialProps(ctx);
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(' ')}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
                ...emotionStyleTags,
            ],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="description" content="A gallery of Excigma's projects, notes and other things he tinkers with." />
                    <meta name="theme-color" content="#2f3136" />
                    <meta name="subject" content="Blog" />
                    <meta name="author" content="Excigma" />

                    <meta name="og:type" content="website" />
                    <meta name="og:image" content="/apple-icon-72x72.png" />
                    <meta name="og:site_name" content="Excigma's Page" />
                    <meta name="og:description" content="A gallery of Excigma's projects, notes and other things he tinkers with." />

                    <link rel="shortcut icon" href="favicon.ico" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                    <meta name="msapplication-TileColor" content="#2f3136" />
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />


                    <link rel="manifest" href="/manifest.json" />

                    <script async defer data-website-id="0b58b0f1-03c3-4420-aec0-d4ae8e4518c8" src="https://umami.up.railway.app/umami.js"></script>

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}